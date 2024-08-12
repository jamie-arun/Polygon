 // SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";


contract AnimalRacoon is ERC721A{

    address public owner;

    // Max nos of tokens to be minted
    uint256 public maxQuantity = 5;

    // url for the nfts
    string baseUrl = "https://rose-academic-galliform-365.mypinata.cloud/ipfs/QmevBv3wTxErg7DBCVW1NncQVojMDdPVeTQ72x16fyY8So/?pinataGatewayToken=BUvHdzqTAXLLKcHp2oqNjAYDR-lP70mMmWTleG7g7YAbQiipyxtjnf9WjMkT0afP";

    // prompt description
    string public prompt =
        "racoon climbing wall";
 
    constructor() ERC721A("AnimalRacoon", "RR") {
        owner = msg.sender;
    }

    // owner to executes the function
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action.");
        _;
    }

    // mint NFT which only owner can perform
    function mint(uint256 quantity) external payable onlyOwner{
        require(totalSupply() + quantity <= maxQuantity ,"You can not mint more than 5");
        _mint(msg.sender, quantity);
    }
    

    // Override the baseURI function to return the base URL for NFTs
    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    // Give back URL for prompt description
    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
