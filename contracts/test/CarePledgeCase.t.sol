// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {CarePledgeCaseFactory} from "../src/CarePledgeCaseFactory.sol";
import {ICarePledgeStrategy} from "../src/interfaces/ICarePledgeStrategy.sol";
import {ICarePledgeManager} from "../src/interfaces/ICarePledgeManager.sol";
import { Allo } from "@allo/v2/core/Allo.sol";
import { IRegistry } from "@allo/v2/core/interfaces/IRegistry.sol";
import { Metadata } from "@allo/v2/core/libraries/Metadata.sol";
import {MockERC20, ERC20} from "./mocks/MockERC20.sol";
import {SafeERC20, IERC20} from "openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol";
contract CarePledgeCaseTest is Test {
    address private _multisig;
    address private _Patient;
    address private _Provider1;
    address private _Provider2;
    address private _donor1;
    address private _donor2;
    MockERC20 private _usdc;
    uint256 private _sepoliaFork;

    Allo private _allo;
    IRegistry private _registry;

    string SEPOLIA_RPC_URL = vm.envString("SEPOLIA_RPC_URL");

    function setUp() public {
        _sepoliaFork = vm.createFork(SEPOLIA_RPC_URL);
        _multisig = makeAddr("multisig");
        _Patient = makeAddr("patient");
        _Provider1 = makeAddr("provider1");
        _Provider2 = makeAddr("provider2");
        _donor1 = makeAddr("donor1");
        _donor2 = makeAddr("donor2");

        _allo = Allo(0x8dDe1922d5f772890f169714FACeEF9551791CaF);
        _registry = IRegistry(0xAEc621EC8D9dE4B524f4864791171045d6BBBe27);
    }

    function test_FuzzTest() public {
        vm.selectFork(_sepoliaFork);
        _usdc = new MockERC20("USDC", "USDC", 6, 5000);
        ERC20(_usdc).transfer(_donor1, 2500);
        ERC20(_usdc).transfer(_donor2, 2500);
        // ########## Create a new case ##########
        CarePledgeCaseFactory factory = new CarePledgeCaseFactory(
            address(_allo),
            address(_registry),
            0,
            Metadata(1,""),
            _multisig
        );

        address[] memory providers = new address[](2);
        providers[0] = _Provider1;
        providers[1] = _Provider2;

        uint256[] memory amounts = new uint256[](1);
        amounts[0] = 1000;

        address[] memory milestoneRecipients = new address[](6);
        milestoneRecipients[0] = _Patient;
        milestoneRecipients[1] = _Provider1;
        milestoneRecipients[2] = _Provider2;
        milestoneRecipients[3] = _Provider1;
        milestoneRecipients[4] = _Patient;
        uint256[] memory milestoneAmounts = new uint256[](6);
        milestoneAmounts[0] = 1000;
        milestoneAmounts[1] = 1000;
        milestoneAmounts[2] = 1000;
        milestoneAmounts[3] = 1000;
        milestoneAmounts[4] = 1000;


        ICarePledgeStrategy.CaseData memory caseData = ICarePledgeStrategy.CaseData({
            patient: _Patient,
            providers: providers
        });

        (uint256 poolId, address strategy, address manager) = factory.createNewCase(
            address(_usdc),
            Metadata(1,""),
            abi.encode(caseData)
        );

        assertEq(factory.isCaseFromFactory(poolId), true, "Should be true");
        ICarePledgeStrategy(strategy).setMilestones(milestoneRecipients, milestoneAmounts);
        // ########## Fund the case ##########
        ICarePledgeManager(manager).setFundingGoal(5000);
        vm.startPrank(_donor1);
        IERC20(_usdc).approve(address(manager), 2500);
        ICarePledgeManager(manager).donate(2500);
        vm.stopPrank();

        vm.startPrank(_donor2);
        IERC20(_usdc).approve(address(manager), 2500);
        ICarePledgeManager(manager).donate(2500);
        vm.stopPrank();

        assertEq(IERC20(_usdc).balanceOf(address(strategy)), 5000, "Should be 5000");

        // ########## Execute the case ##########
        ICarePledgeStrategy(strategy).nextMilestone();
        assertEq(IERC20(_usdc).balanceOf(_Patient), 1000, "Should be 1000");
        assertEq(IERC20(_usdc).balanceOf(_Provider1), 0, "Should be 0");
        assertEq(IERC20(_usdc).balanceOf(_Provider2), 0, "Should be 0");
        assertEq(IERC20(_usdc).balanceOf(address(strategy)), 4000, "Should be 4000");

        ICarePledgeStrategy(strategy).nextMilestone();
        assertEq(IERC20(_usdc).balanceOf(_Patient), 1000, "Should be 1000");
        assertEq(IERC20(_usdc).balanceOf(_Provider1), 1000, "Should be 1000");
        assertEq(IERC20(_usdc).balanceOf(_Provider2), 0, "Should be 0");
        assertEq(IERC20(_usdc).balanceOf(address(strategy)), 3000, "Should be 3000");

        ICarePledgeStrategy(strategy).nextMilestone();
        assertEq(IERC20(_usdc).balanceOf(_Patient), 1000, "Should be 1000");
        assertEq(IERC20(_usdc).balanceOf(_Provider1), 1000, "Should be 1000");
        assertEq(IERC20(_usdc).balanceOf(_Provider2), 1000, "Should be 1000");
        assertEq(IERC20(_usdc).balanceOf(address(strategy)), 2000, "Should be 2000");

        ICarePledgeStrategy(strategy).nextMilestone();
        assertEq(IERC20(_usdc).balanceOf(_Patient), 1000, "Should be 1000");
        assertEq(IERC20(_usdc).balanceOf(_Provider1), 2000, "Should be 2000");
        assertEq(IERC20(_usdc).balanceOf(_Provider2), 1000, "Should be 1000");
        assertEq(IERC20(_usdc).balanceOf(address(strategy)), 1000, "Should be 1000");


        ICarePledgeStrategy(strategy).nextMilestone();
        assertEq(IERC20(_usdc).balanceOf(_Patient), 2000, "Should be 1000");
        assertEq(IERC20(_usdc).balanceOf(_Provider1), 2000, "Should be 2000");
        assertEq(IERC20(_usdc).balanceOf(_Provider2), 1000, "Should be 1000");
        assertEq(IERC20(_usdc).balanceOf(address(strategy)), 0, "Should be 0");
    }
}
