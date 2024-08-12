// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/YellowChikky.sol/YellowChikky.json");

const tokenAddress = "0xf51D0FD32f79A40E30a0302FAE424c2fcff6a485"; // place your erc271a contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xc0a0c84d598dDE03E42922Ad4f02368BCca867d7"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " NFT'S");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });