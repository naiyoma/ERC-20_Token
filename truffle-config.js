
const HDWalletProvider = require("truffle-hdwallet-provider");
const developmentMnemonic =
"recipe flock effort test evil card identify grab shift venture movie tonight";
const private_keys = '6c32a1dbd9023cc23501af8bea0216822c80508133ee856eab0712b67e32d2ba';
// const infuraKey = "fj4jll3k.....";
const MNENOMIC = "orange";
const mnemonic = "rich";
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  // contracts_build_directory: path.join(__dirname, "./public/contracts/build/"),
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: '*',
      gas: 4612388,
      gasPrice: 25000000000,
      total_accounts: 20,
      from: "0x0000000000000000000000000000000000000001",
      mnemonic
    },
    rinkeby: {
      provider: () => new HDWalletProvider(
      MNENOMIC,
      "https://rinkeby.infura.io/v3/26c6c7b4297344c6afbc26bca2f7baaa"
      ),
      network_id: 4,
      gas: 4612388,
      gasPrice: 25000000000,
    },
  },
  solc: {
    version: "0.8.0"

  }
};