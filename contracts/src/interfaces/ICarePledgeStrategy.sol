// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface ICarePledgeStrategy {
    error UnauthorizedCaller();
    error InvalidMilestoneLength();
    error EndOfStrategy();

    struct Milestone {
        uint256 timestamp;
        address[] payoutRecipients;
        uint256[] payoutAmounts;
    }

    struct CaseData {
        address patient;
        address[] providers;
    }

    event PayoutInitiated(address recipient, uint256 amountReceived, address privacyProof);
    
    function nextMilestone() external;

    function setMilestones(address[] memory recipients, uint256[] memory amounts) external;
}