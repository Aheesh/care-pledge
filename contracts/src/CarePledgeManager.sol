// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import { ICarePledgeManager, Metadata } from "./interfaces/ICarePledgeManager.sol";
import { Allo } from "@allo/v2/core/Allo.sol";
import { IRegistry } from "@allo/v2/core/interfaces/IRegistry.sol";

contract CarePledgeManager is ICarePledgeManager {
    Allo private _allo;
    IRegistry private _registry;
    uint256 private _poolId;
    address private _donationToken;
    Metadata private _metadata;

    constructor(Allo allo, IRegistry registry) {
        _allo = allo;
        _registry = registry;
    }

    function initialize(
        uint256 poolId,
        address donationToken,
        Metadata memory metadata
    ) external override {
        _poolId = poolId;
        _donationToken = donationToken;
        _metadata = metadata;
    }

}