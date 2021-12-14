const Migrations = artifacts.require("./QwertyToken.sol");

module.exports = function (deployer) {
    deployer.deploy(QwertyToken);
};
