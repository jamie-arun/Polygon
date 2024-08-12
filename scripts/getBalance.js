// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/AnimalRacoon.sol/AnimalRacoon.json");

const tokenAddress = "0xd611C7fD934B66f7251E06F2254eAB94448e99Af"; // place your erc271a contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x3A8096e60391B865Da1d9E11Dc22a8a59492C691"; // place your public address for your wallet here

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
