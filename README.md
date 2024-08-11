# PolyBridge
Simple Project Of Transfering NFT(ERC271/ERC271A) Using MintBatch From SEPOLIA To AMOY POLYOGn Network Using FxPortal Bridge

## Description
This Project Will Give You Detailed View:
* Create Your NFT Images using Modjournig And Deploy in Sepolia in Network
* To Write An Fully Functional ERC271A and Import NFT To Contract
* Deploy An Contract On Sepolia NetWork
* Batch Mint Your NFT's Using (ERC271A) To Your Wallet
* Approve Your Contract To FxBridge And Connect to Amoy Network Using  Fx Contract
* Deposit Your NFT's To Amoy Network And Wait For 20 min To 30 min For showing
* Get Balance Of Wallet From Amoy Network Using contract address from polyscan

## Getting Started
For Getting Started you Need An Solidity Enviornment To Work With You Can Either Use Offline Coders like [VScode](https://code.visualstudio.com/) 
* After You Setup Your IDE Then You Need To Create Some Cool Images For Your NFT's For That You Can Use Any Online AI Image Generaters Like [Midjourney](https://www.midjourney.com/) 
* When You Generated Your Cool Images For Your NFT's.Then You Need To Upload These Images To Get IPFS Url For Your ERC271A NFT Contract For That You Can Use Free IPFS Provider Like [Pinata](https://www.pinata.cloud/) ,Just Upload All Of Your Images To One Folder Then Upload That Folder To PINATA Sever For Getting Your IPFS Url 
* Next Is Create Your On ERC271A Contract You Can Use Contract I Provided As Template 
* Next Is You Want An Wallet With Test SepoliaETH ,If You Dont Have One You Can Mine Sepolia ETH FREE!!! On [SepoliaPoW](https://sepolia-faucet.pk910.de/) Just Mine For Few Minutes And Withdraw It To Your Wallet To Your Account And You Are Good To GO!!!   
### Installing

* Now You Need Basi Packages To Succesfully Bridge Our NFT's Which Are:
* [Nodejs](https://nodejs.org/en/download/current)
* [HardHat][https://hardhat.org/hardhat-runner/docs/getting-started](https://hardhat.org/)
* After You installed All Of Dependencies
* Then You Need To Paste Your private Key in File :(.env.example =>PRIVATE_KEY='Your Key Here')

### Executing program

* Afeter Paste Your private Key in File :(.env.example =>PRIVATE_KEY='Your Key Here')
* You Need To Paste Your WalletAdress In These Files(mint.js,approveDeposit.js)
0. Run npm i to install dependencies
```
npm i
```
1. install openzeppelin Contracts
```
npm install @openzeppelin/contracts
```
2. Run npx hardhat run scripts/deploy.js --network sepolia to deploy ERC271A contract
```
npx hardhat run scripts/deploy.js --network sepolia
```
3. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
(mint.js,approveDeposit.js)
4. Run npx hardhat run scripts/mint.js --network sepolia to mint NFT's to your wallet
```
npx hardhat run scripts/mint.js --network sepolia
```
5. Run npx hardhat run scripts/approveDeposit.js --network sepolia to approve and deposit your NFT's to polygon
```
npx hardhat run scripts/approveDeposit.js --network sepolia
```
6. Wait 20-30ish minutes for tokens to show on polygon account
7. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
8. Use this polygon contract address for your getBalance script's tokenAddress
9. Run npx hardhat run scripts/getBalance.js --network amoy to see the new polygon balance

## Help
Main issues That Tend To Encounter:
* Having No SepoliaETH:(
 sol:)Go To [SepoliaPoW](https://sepolia-faucet.pk910.de/) ,Still Cant Get Contact Me

* If You Have To Phase Any Sort Of Dificulties Or Errors Feel Free To Approach Me I Will Be More Happy To Help You
```
amarnath759498@gmail.com
```

## Authors

Contributors names and contact info

Shadow Known As amar
ex. [@Amar](amarnath759498@gmail.com)


## License

This project is licensed under the [AMAR] License - see the LICENSE.md file for details
