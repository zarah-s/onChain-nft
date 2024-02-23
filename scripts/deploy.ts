import { ethers } from "hardhat";

async function main() {

  const token = await ethers.deployContract("OnchainNFT");

  await token.waitForDeployment();

  console.log(
    `Contract deployed at ${token.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
