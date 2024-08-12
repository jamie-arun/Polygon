// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../../Mumbai-Polygon-Bridge-main/fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/YellowChikky.sol/YellowChikky.json");

const tokenAddress = "0x8a6aFFd0c03C2d7c14d02Ad496Ca9fe8Ec2b47BC"; // place your erc271a contract address here
const tokenABI = tokenContractJSON.abi;
const fxERC271ARootAddress = "0x9E688939Cb5d484e401933D850207D6750852053";
const walletAddress = "0xc0a0c84d598dDE03E42922Ad4f02368BCca867d7"; // place your public address for your wallet here

async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC271ARootAddress);
    
    const approveTx = await tokenContract.setApprovalForAll(fxERC271ARootAddress,true);
    await approveTx.wait();

    console.log('Approval confirmed');
for( i=0;i<5;i++){

    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, i, "0x6556");
    await depositTx.wait();
}

    console.log("Your NFT's Has Been Transfered");
    
  
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });