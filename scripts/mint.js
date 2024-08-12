// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/AnimalRacoon.sol/AnimalRacoon.json");
require('dotenv').config()

const tokenAddress = "0xfE977a4c9f6Ef20DbAD829a85912C16c0a7294D2"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x3A8096e60391B865Da1d9E11Dc22a8a59492C691"; 
 // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    
    

    
      const depositTx = await token.mint(5);
  
      // Wait for the deposit to be confirmed
      await depositTx.wait();
    
  
    console.log("NFT minted!!!!");
    console.log("Received : " + await token.balanceOf(walletAddress) + " NFT'S");
}
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
