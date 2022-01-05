
contract QwertyToken {
    mapping (address => uint256) balances;
    mapping (address => mapping (address => uint256)) allowed;
    uint public balance;
    uint256 totalSupply_;

    constructor(uint256 total) public
    {
        totalSupply_ = total;
        balance = 0;
    }

    // The payable keyword allows this function to accept Eth.
    function contribute() public payable
    {
        // msg.value is the value of Ether sent in a transaction
        balance += msg.value;
    }
}
