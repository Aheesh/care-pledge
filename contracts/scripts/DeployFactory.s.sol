// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import { CarePledgeCaseFactory } from "../src/CarePledgeCaseFactory.sol";
import { Metadata } from "../lib/allo-v2/contracts/core/libraries/Metadata.sol";

contract DeployFactoryScript is Script {
   function run() public {
      uint256 deployerPrivateKey = vm.envUint("ACCOUNT_PRIVATE_KEY");

      vm.startBroadcast(deployerPrivateKey);
      address _allo = 0x8dDe1922d5f772890f169714FACeEF9551791CaF;
      address _registry = 0xAEc621EC8D9dE4B524f4864791171045d6BBBe27;

      CarePledgeCaseFactory factory = new CarePledgeCaseFactory(
            _allo,
            _registry,
            0,
            Metadata(1,""),
            msg.sender
        );

      vm.stopBroadcast();
   }
}