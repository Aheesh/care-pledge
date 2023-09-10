// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import { Allo } from "@allo/v2/core/Allo.sol";
import { IRegistry } from "@allo/v2/core/interfaces/IRegistry.sol";
import { Metadata } from "@allo/v2/core/libraries/Metadata.sol";
import { ICarePledgeCaseFactory } from "./interfaces/ICarePledgeCaseFactory.sol";
import { CarePledgeManager } from "./CarePledgeManager.sol";
import { ICarePledgeStrategy } from "./interfaces/ICarePledgeStrategy.sol"; 

import { Create2 } from "@openzeppelin/contracts/utils/Create2.sol";

contract CarePledgeCaseFactory is ICarePledgeCaseFactory {
    Allo private _allo;
    IRegistry private _registry;
    bytes32 internal immutable _profileId;
    mapping(uint256 => bool) private _isCaseFromFactory;

    constructor(
        address allo,
        address registry,
        uint256 nonce,
        Metadata memory metadata,
        address multisig
    ) {
        _allo = Allo(allo);
        _registry = IRegistry(registry);

        address[] memory profileMembers = new address[](1);
        profileMembers[0] = multisig;

        // Create a profile for the registry
        _profileId = _registry.createProfile(
            nonce,
            "CarePledgeCaseFactory",
            metadata,
            multisig, 
            profileMembers
        );
    }

    // Emits PoolCreated(poolId, _profileId, _strategy, _token, _amount, _metadata);
    function createNewCase(
        address strategy,
        address donationToken,
        Metadata memory metadata
    ) external returns (uint256) {
        address[] memory managers = new address[](1);
        CarePledgeManager manager = new CarePledgeManager(_allo, _registry);

        managers[0] = address(manager);

        uint256 poolId = _allo.createPoolWithCustomStrategy(
            _profileId,
            strategy,
            "", // Initial Strategy data
            donationToken,
            0,
            metadata,
            managers
        );

        manager.initialize(poolId, donationToken, metadata);

        _isCaseFromFactory[poolId] = true;

        emit NewCase(poolId, manager);

        return poolId;
    }

    function isCaseFromFactory(uint256 poolId)
        external
        view
        override
        returns (bool)
    {
        return _isCaseFromFactory[poolId];
    }
}
