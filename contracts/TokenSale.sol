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

    function mul(uint x, uint y) internal pure returns (uint z) {
        require(y == 0 || (z=x*y)/y ==x);
    }
    function buyTokens(uint256 _numberOfTokens) public payable{
        //Inorder to sell the tokens
            //1.Triger the sell event
            //2.check the value of existing tokens
            //3.keep track of sold tokens
            //4.check for a sucessful transfer
        uint256 amountTobuy = msg.value;
        uint256 contractBalance = tokenContract.balanceOf(address(this));
        require(amountTobuy > 0,  "your balance value is 0");
        require(amountTobuy <= contractBalance, "The reserve does not have enough tokens");
        require(tokenContract.transfer(msg.sender, _numberOfTokens));
        tokenSold += _numberOfTokens;
        emit sell(msg.sender, _numberOfTokens);
    }

    
}