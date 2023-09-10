// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import { BaseStrategy } from "@allo/v2/strategies/BaseStrategy.sol";
import { ICarePledgeStrategy } from "./interfaces/ICarePledgeStrategy.sol";
import { IAllo } from "@allo/v2/core/interfaces/IAllo.sol";
import {ReentrancyGuard} from "openzeppelin-contracts/contracts/security/ReentrancyGuard.sol";

contract CarePledgeStrategy is
    ICarePledgeStrategy,
    BaseStrategy,
    ReentrancyGuard
{

    /// ******************** Storage ********************
    Patient private _patient;
    Provider[] private _providers;
    Milestone[] private _milestones;
    Donor[] private _donors;

    constructor(
        address allo,
        bytes memory patientData,
        bytes memory providerData,
        bytes memory milestoneData
    ) BaseStrategy(allo, "CarePledgeStrategy") {
        _patient = abi.decode(patientData, (Patient));
        _providers = abi.decode(providerData, (Provider[]));
        _milestones = abi.decode(milestoneData, (Milestone[]));
    }

    function _isValidAllocator(
        address _allocator
    ) internal view virtual override returns (bool) {}

    function _registerRecipient(
        bytes memory _data,
        address _sender
    ) internal virtual override returns (address) {}

    function _allocate(
        bytes memory _data,
        address _sender
    ) internal virtual override {}

    function _distribute(
        address[] memory _recipientIds,
        bytes memory _data,
        address _sender
    ) internal virtual override {}

    function _getPayout(
        address _recipientId,
        bytes memory _data
    ) internal view virtual override returns (PayoutSummary memory) {}

    function _getRecipientStatus(
        address _recipientId
    ) internal view virtual override returns (Status) {
        
    }

    function initialize(
        uint256 _poolId,
        bytes memory _data
    ) external override {}
}