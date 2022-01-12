// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract QwertyToken{
    mapping (address => uint256) balance;

    uint256 public totalSupply_;
    string public name = "Qwerty Token";
    string public symbol = "QWT";

    constructor (uint256 _total) {
        totalSupply_ = _total;
        balance[msg.sender]= totalSupply_;
    }

}
