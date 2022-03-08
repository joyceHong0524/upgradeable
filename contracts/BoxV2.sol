//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

contract BoxV2 {
    uint public val;

    function increment() external {
        val += 1;
    }
}