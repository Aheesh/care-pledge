// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import { BaseStrategy } from "@allo/v2/strategies/BaseStrategy.sol";
import { Allo } from "@allo/v2/core/Allo.sol";
import {ReentrancyGuard} from "openzeppelin-contracts/contracts/security/ReentrancyGuard.sol";
import { SafeERC20, IERC20 } from "openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol";
import {ICarePledgeStrategy} from "./interfaces/ICarePledgeStrategy.sol";

contract CarePledgeStrategy is
    ICarePledgeStrategy,
    BaseStrategy,
    ReentrancyGuard
{
    using SafeERC20 for IERC20;
    event Log(string message);
    /// ******************** Storage ********************
    address private _patient;
    address[] private _recipients;
    Milestone[] private _milestones;
    uint256 private _currentMilestoneIndex;

    mapping(address => uint256) private _recipientTotalPayouts;
    mapping(address => uint256) private _donorTotalDonations;

    address private _manager;
    Allo private _allo;
    address private _token;

    constructor(
        address allo,
        address payoutToken,
        bytes memory data,
        address manager
    ) BaseStrategy(allo, "CarePledgeStrategy") {
        _allo = Allo(allo);
        _token = payoutToken;
        _manager = manager;

        CaseData memory caseData = abi.decode(data, (CaseData));
        _patient = caseData.patient;
        uint256 cachedLength = caseData.providers.length;
        
        _recipients = new address[](cachedLength);
        _recipients = caseData.providers;
        _recipients.push(_patient);
        
        uint256 milestoneLength = caseData.milestones.length;
        for (uint256 i = 0; i < milestoneLength; i++) {
            _milestones.push(caseData.milestones[i]);
        }
    }

    function initialize(uint256 _poolId, bytes memory _data) external override {
        poolId = _poolId;
    }

    // ########### Internal Funcitons ###########
    function _afterIncreasePoolAmount(uint256 amount) internal override {
        _donorTotalDonations[tx.origin] += amount;
    }

    function nextMilestone() external override {
        if (_currentMilestoneIndex == _milestones.length) {
            revert EndOfStrategy();
        }
        _currentMilestoneIndex++;
        Milestone memory currentMilestoneReached = _milestones[
            _currentMilestoneIndex
        ];
        _distribute(
            currentMilestoneReached.payoutRecipients,
            abi.encode(currentMilestoneReached),
            msg.sender
        );
    }

    function _distribute(
        address[] memory _recipientIds,
        bytes memory _data,
        address _sender
    ) internal virtual override {
        if (_sender != _manager) {
            revert UnauthorizedCaller();
        }
        uint256 recipentLength = _recipientIds.length;
        Milestone memory completedMilestone = abi.decode(_data, (Milestone));

        for (uint256 i = 0; i < recipentLength; i++) {
            address recipient = _recipientIds[i];
            uint256 recipientPayout = completedMilestone.payoutAmounts[i];
            IERC20(_token).safeTransfer(recipient, recipientPayout);
            emit PayoutInitiated(recipient, recipientPayout, address(0));
        }
    }

    // ########### Unused Functions ###########
    function _allocate(
        bytes memory _data,
        address _sender
    ) internal virtual override {}

    function _isValidAllocator(
        address _allocator
    ) internal view virtual override returns (bool) {}

    function _getPayout(
        address _recipientId,
        bytes memory _data
    ) internal view virtual override returns (PayoutSummary memory) {}

    function _getRecipientStatus(
        address _recipientId
    ) internal view virtual override returns (Status) {}

    function _registerRecipient(
        bytes memory _data,
        address _sender
    ) internal virtual override returns (address) {}
}