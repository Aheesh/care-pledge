// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import { ICarePledgeManager } from "./interfaces/ICarePledgeManager.sol";
import { ICarePledgeStrategy } from "./interfaces/ICarePledgeStrategy.sol";
import { Allo } from "@allo/v2/core/Allo.sol";
import { IRegistry } from "@allo/v2/core/interfaces/IRegistry.sol";
import { Metadata } from "@allo/v2/core/libraries/Metadata.sol";
import { SafeERC20, IERC20 } from "openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol";

contract CarePledgeManager is ICarePledgeManager {
    using SafeERC20 for IERC20;

    Allo private _allo;
    IRegistry private _registry;
    uint256 private _poolId;
    ICarePledgeStrategy private _strategy;
    
    address private _donationToken;
    address private _patient;
    uint256 private _fundingGoal;
    uint256 private _totalDonations;

    constructor(
        Allo allo,
        IRegistry registry
    ) {
        _allo = allo;
        _registry = registry;
    }

    function initialize(
        uint256 poolId,
        address donationToken,
        address strategy
    ) external override {
        _poolId = poolId;
        _donationToken = donationToken;
        _strategy = ICarePledgeStrategy(strategy);
    }

    function donate(uint256 amount) external override returns (uint256) {
        if (amount == 0) {
            revert ZeroAmount();
        }
        if (_totalDonations == _fundingGoal) {
            revert FundingGoalReached();
        }

        uint256 amountUntilGoal = _fundingGoal - _totalDonations;
        
        if (amount > amountUntilGoal) {
            amount = amountUntilGoal;
        }

        IERC20(_donationToken).transferFrom(msg.sender, address(this), amount);
        IERC20(_donationToken).approve(address(_allo), amount);

        _allo.fundPool(_poolId, amountUntilGoal);

        return amount;
    }

    function executeMilestone() external override {
        _strategy.nextMilestone();
    }

}   