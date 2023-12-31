// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import { Allo } from "@allo/v2/core/Allo.sol";
import { IRegistry } from "@allo/v2/core/interfaces/IRegistry.sol";
import { Metadata } from "@allo/v2/core/libraries/Metadata.sol";
import { ICarePledgeCaseFactory } from "./interfaces/ICarePledgeCaseFactory.sol";
import { CarePledgeManager } from "./CarePledgeManager.sol";
import { CarePledgeStrategy } from "./CarePledgeStrategy.sol"; 

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

        address[] memory profileMembers = new address[](2);
        profileMembers[0] = multisig;
        profileMembers[1] = address(this);

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
        address donationToken,
        bytes memory data
    ) external returns (uint256, address, address) {
        address[] memory managers = new address[](1);
        CarePledgeManager manager = new CarePledgeManager(_allo, _registry);
        managers[0] = address(manager);
        Metadata memory metadata = Metadata(1, "");
        CarePledgeStrategy strategy = new CarePledgeStrategy(
            address(_allo),
            donationToken,
            data,
            address(manager)
        );
        uint256 poolId = _allo.createPoolWithCustomStrategy(
            _profileId,
            address(strategy),
            "", // Initial Strategy data
            donationToken,
            0,
            metadata,
            managers
        );
        manager.initialize(poolId, donationToken, address(strategy));
        _isCaseFromFactory[poolId] = true;

        emit NewCase(poolId, address(manager));

        return (poolId, address(strategy), address(manager));
    }

    function isCaseFromFactory(
        uint256 poolId
    ) external view override returns (bool) {
        return _isCaseFromFactory[poolId];
    }

}
