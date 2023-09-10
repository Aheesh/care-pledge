// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import { Metadata } from "@allo/v2/core/libraries/Metadata.sol";

interface ICarePledgeCaseFactory {
    error CarePledgeManagerDeploymentFailed();

    event NewCase(uint256 indexed poolId, address indexed manager);
    /**
     * @notice Deploys a new CarePledgeCase contract
     */
    function createNewCase(
        address donationToken,
        Metadata memory metadata,
        bytes memory data
    ) external returns (uint256);

    function isCaseFromFactory(uint256 poolId) external view returns (bool);
}   