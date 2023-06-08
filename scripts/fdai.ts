const { ethers, upgrades } = require("hardhat");


async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying the FDAI contract...");
  const fDAI = await ethers.getContractFactory("fDAI");
  const FDAI = await fDAI.deploy ();

  await FDAI.deployed();

  console.log("FDAI contract deployed!");
  console.log("Contract address:", FDAI.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});