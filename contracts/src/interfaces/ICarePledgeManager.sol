// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface ICarePledgeManager {
    error ZeroAmount();
    error DonationPeriodEnded();
    error FundingGoalReached();
    /**
     * @notice Initializes the contract
     */
    function initialize(uint256 poolId, address donationToken, address strategy) external;

    function donate(uint256 amount) external returns (uint256);
    
    function executeMilestone() external;

}