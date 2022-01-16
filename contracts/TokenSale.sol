// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./QwertyToken.sol";

contract QwertTokenSale {
    address admin;
    QwertyToken public tokenContract;
    uint256 public tokenPrice;

    function tokenSale(QwertyToken _tokenContract, uint256 _tokenPrice) public {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;

    }

    function buyTokens(uint256 _numberOfTokens) public payable{
        
    }

    
}