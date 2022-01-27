require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(
        process.env.MNEMONIC,
        `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
        0,
        5 
      ),
      gas: 1000000,
      gasPrice: 9000000000,
      network_id: 4

    },
  },
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*"
    },
  solc: {
      version: "0.8.0"
    },
    optimizer: {
      enabled: true,
      runs: 200
    }
};