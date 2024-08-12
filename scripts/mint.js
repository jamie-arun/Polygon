// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/YellowChikky.sol/YellowChikky.json");
require('dotenv').config()

const tokenAddress = "0x8a6aFFd0c03C2d7c14d02Ad496Ca9fe8Ec2b47BC"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xc0a0c84d598dDE03E42922Ad4f02368BCca867d7"; 
 // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    
    

    
      const depositTx = await token.mint(6);
  
      // Wait for the deposit to be confirmed
      await depositTx.wait();
    
  
    
    console.log( + await token.balanceOf(walletAddress) + " NFT'S Are Minted successfully");
}
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });