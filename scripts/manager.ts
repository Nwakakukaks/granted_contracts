const { ethers, upgrades } = require("hardhat");
import {CHALLENGE_DURATION} from '../utils/constants';

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying the contracts...");
  const Manager = await ethers.getContractFactory("Manager");
  const Validator = await ethers.getContractFactory("Validator");
  const manager = await Manager.deploy ();
  const validator = await Validator.deploy ();

  await manager.deployed();
  await validator.deployed();

  console.log("Manager and Validator contract deployed!");
  console.log("Contract address:", manager.address);
  console.log("Contract address:", validator.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});