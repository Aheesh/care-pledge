// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import { Metadata } from "@allo/v2/core/libraries/Metadata.sol";

interface ICarePledgeManager {
    /**
     * @notice Initializes the contract
     */
    function initialize(uint256 poolId, address donationToken, Metadata memory metadata) external;

}