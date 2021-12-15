var QwertyToken = artifacts.require("./QwertyToken.sol");

module.exports = function (deployer) {
    deployer.deploy(QwertyToken);
};
