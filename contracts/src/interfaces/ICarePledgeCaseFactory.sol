// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0

interface ICarePledgeCaseFactory {

    event NewCase(address indexed caseAddress);
    /**
     * @notice Deploys a new CarePledgeCase contract
     */
    function deployNewCase() external returns (address);


}   