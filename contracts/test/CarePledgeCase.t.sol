// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {CarePledgeCaseFactory} from "../src/CarePledgeCaseFactory.sol";
import {ICarePledgeStrategy} from "../src/interfaces/ICarePledgeStrategy.sol";
import { Allo } from "@allo/v2/core/Allo.sol";
import { IRegistry } from "@allo/v2/core/interfaces/IRegistry.sol";
import { Metadata } from "@allo/v2/core/libraries/Metadata.sol";

import {MockERC20} from "./mocks/MockERC20.sol";

contract CarePledgeCaseTest is Test {
    address private _multisig;
    address private _Patient;
    address private _Provider1;
    address private _Provider2;
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

        _usdc = new MockERC20("USDC", "USDC", 6);
        _allo = Allo(0x8dDe1922d5f772890f169714FACeEF9551791CaF);
        _registry = IRegistry(0xAEc621EC8D9dE4B524f4864791171045d6BBBe27);
    }

    function test_FuzzTest() public {
        vm.selectFork(_sepoliaFork);

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

        ICarePledgeStrategy.Milestone[] memory milestones = new ICarePledgeStrategy.Milestone[](6);
        address[] memory patientList = new address[](1);
        patientList[0] = _Patient;
        address[] memory provider1List = new address[](1);
        patientList[0] = _Provider1;
        address[] memory provider2List = new address[](1);
        patientList[0] = _Provider2;

        uint256[] memory amounts = new uint256[](1);
        amounts[0] = 1000;

        milestones[0] = ICarePledgeStrategy.Milestone({
            timestamp: block.timestamp,
            payoutRecipients: patientList,
            payoutAmounts: amounts
        });
        milestones[1] = ICarePledgeStrategy.Milestone({
            timestamp: block.timestamp,
            payoutRecipients: provider1List,
            payoutAmounts: amounts
        });
        milestones[2] = ICarePledgeStrategy.Milestone({
            timestamp: block.timestamp,
            payoutRecipients: provider2List,
            payoutAmounts: amounts
        });
        milestones[3] = ICarePledgeStrategy.Milestone({
            timestamp: block.timestamp,
            payoutRecipients: provider1List,
            payoutAmounts: amounts
        });
        milestones[4] = ICarePledgeStrategy.Milestone({
            timestamp: block.timestamp,
            payoutRecipients: patientList,
            payoutAmounts: amounts
        });

        ICarePledgeStrategy.CaseData memory caseData = ICarePledgeStrategy.CaseData({
            patient: _Patient,
            providers: providers,
            milestones: milestones
        });

        uint256 poolId = factory.createNewCase(
            address(_usdc),
            Metadata(1,""),
            abi.encode(caseData)
        );

        assertEq(factory.isCaseFromFactory(poolId), true, "Should be true");
    }
}
