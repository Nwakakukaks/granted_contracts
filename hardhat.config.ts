require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-chai-matchers");

const PRIVATE_KEY = "1b6d2f1de424759f97c5ba0d5449750b181c78e9b1e442b9caa1f59b7bb7a1ab";

module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
    defaultNetwork: "polygon_mumbai",
    networks: {
      hardhat: {
        chainId: 1337
      },
      polygon_mumbai: {
        url: "https://rpc-mumbai.maticvigil.com",
        accounts: [PRIVATE_KEY] 
      }
  },
  paths: {
    sources: "src",
    tests: "test",
    cache: "./cache",
    artifacts: "deployment/mumbai",
  },
};