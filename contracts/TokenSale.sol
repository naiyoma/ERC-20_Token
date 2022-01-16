// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./QwertyToken.sol";

contract QwertTokenSale {
    address admin;
    QwertyToken public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokenSold;

    event sell(
        address _buyer,
        uint256 _amount);
    function tokenSale(QwertyToken _tokenContract, uint256 _tokenPrice) public{
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;

    }

    function buyTokens(uint256 _numberOfTokens) public payable{
        //Inorder to sell the tokens
            //1.Triger the sell event
            //2.check the value of existing tokens
            //3.keep track of sold tokens
            //4.check for a sucessful transfer

        tokenSold += _numberOfTokens;
        emit sell(msg.sender, _numberOfTokens);
    }

    
}