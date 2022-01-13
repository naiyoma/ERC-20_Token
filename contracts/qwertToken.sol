// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract QwertyToken{
    mapping (address => uint256) balance;
    mapping(address => mapping(address => uint256 )) public allowance;

    uint256 public totalSupply_;
    string public name = "Qwerty Token";
    string public symbol = "QWT";

    event Transfer(
        address indexed _from, 
        address indexed _to, 
        uint256 _value);

    event Approval(
        address indexed _owner, 
        address indexed _spender, 
        uint256 _value);

    constructor (uint256 _total) {
        totalSupply_ = _total;
        balance[msg.sender]= totalSupply_;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        //check that the sender has more than the value to be sent
        require(balance[msg.sender] > _value);
        balance[msg.sender] = balance[msg.sender] - _value;
        balance[_to] = balance[_to] + _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
    function approve(address _spender, uint256 _value) public returns (bool success){
        // approve the spender to spend funds from your account
        //allowance
        allowance[msg.sender][_spender] = _value;
        // allow and approve
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success){
        //check that the _from  address has enough tokens
        require(_value <= balance[_from]);
        //check that the allowance is enough
        require (_value <= allowance[_from][msg.sender]);
        //deduct transfered tokens from the balance
        balance[_from] = balance[_from] - _value;
        //change allowance
        allowance[_from][msg.sender] = allowance[_from][msg.sender] - _value;
        //update _to account balace
        balance[_to] = balance[_to] + _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

}
