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

    /// ******************** Storage ********************
    address private _patient;
    address[] private _recipients;
    uint256 private _currentMilestoneIndex;
    uint256 private _totalMilestones;

    mapping(address => uint256) private _recipientTotalPayouts;
    mapping(address => uint256) private _donorTotalDonations;
    mapping(uint256 => address) private _milestoneRecipients;
    mapping(uint256 => uint256) private _milestonePayoutAmounts;

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
        _currentMilestoneIndex = 0;

        CaseData memory caseData = abi.decode(data, (CaseData));
        _patient = caseData.patient;
        uint256 cachedLength = caseData.providers.length;
        _recipients = new address[](cachedLength);
        _recipients = caseData.providers;
        _recipients.push(_patient);

    }

    function initialize(uint256 _poolId, bytes memory _data) external override {
        poolId = _poolId;
    }

    function setMilestones(address[] memory recipients, uint256[] memory amounts) external {
        uint256 cachedLength = recipients.length;
        _totalMilestones = cachedLength;

        for (uint256 i = 0; i < cachedLength; i++) {
            _milestoneRecipients[i] = recipients[i];
            _milestonePayoutAmounts[i] = amounts[i];
        }
    }

    // ########### Internal Funcitons ###########
    function _afterIncreasePoolAmount(uint256 amount) internal override {
        _donorTotalDonations[tx.origin] += amount;
    }

    function nextMilestone() external override {
        if (_currentMilestoneIndex > _totalMilestones) {
            revert EndOfStrategy();
        }

        address[] memory recipient = new address[](1);
        recipient[0] = _milestoneRecipients[_currentMilestoneIndex];
        
        _distribute(
            recipient,
            abi.encode(_milestonePayoutAmounts[_currentMilestoneIndex]),
            msg.sender
        );
    }

    function _distribute(
        address[] memory _recipientIds,
        bytes memory _data,
        address _sender
    ) internal virtual override {
        // if (_sender != _manager) {
        //     revert UnauthorizedCaller();
        // }
        uint256 recipentLength = _recipientIds.length;
        
        uint256 recipientPayout = _milestonePayoutAmounts[_currentMilestoneIndex];
        _currentMilestoneIndex += 1;
        IERC20(_token).safeTransfer(_recipientIds[0], recipientPayout);
        emit PayoutInitiated(_recipientIds[0], recipientPayout, address(0));
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