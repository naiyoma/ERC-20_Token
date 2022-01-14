var QwertyToken = artifacts.require("./QwertyToken.sol");
var QwertyTokenSale = artifacts.require("./TokenSale.sol");

module.exports = function (deployer) {
    deployer.deploy(QwertyToken,1000000).then(function() {
        var tokenPrice = 10000000000000;
        return  deployer.deploy(QwertyTokenSale, QwertyToken.address, tokenPrice);
    });
};
