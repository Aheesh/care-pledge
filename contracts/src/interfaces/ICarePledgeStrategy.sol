// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface ICarePledgeStrategy {

    struct Donor {
        address account;
        uint256[] totalDonations;
    }
    
    struct Patient {
        address account;
        uint256[] totalPayouts;
    }

    struct Provider {
        address[] accounts;
        uint256[] totalPayouts;
    }

    struct Milestone {
        uint64 timestamp;
        uint256 amountDue;
        address payoutRecipient;
        bool isProviderPayout;
    }

    event PayoutInitiated(address recipient, uint256 amountReceived, address privacyProof);

}