// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract QwertyToken{

    // initial supply of 1000
    constructor() ERC20("qwerty", "QWTY"){
        _mint(msg.sender, 1000);

    }

}
