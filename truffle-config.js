require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(
        process.env.MNEMONIC,
        `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}` 
      ),
      gasPrice: 2500000000000,
      network_id: 3

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