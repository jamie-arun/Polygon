// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";


contract YellowChikky is ERC721A{

    address public owner;

    // Maximum number of tokens that can be minted
    uint256 public maxQuantity = 6;

    // Base url for the nfts
    string baseUrl = "https://rose-academic-galliform-365.mypinata.cloud/ipfs/QmejLPY9YPPKoQcyYDKJ9b42jiwWUG5uhN155h8cDtEpzp/?pinataGatewayToken=BUvHdzqTAXLLKcHp2oqNjAYDR-lP70mMmWTleG7g7YAbQiipyxtjnf9WjMkT0afP";

    // URL for the prompt description
    string public prompt =
        "3D cute little yellow chicken chick in forest";

    constructor() ERC721A("YellowChikkyy", "YC") {
        owner = msg.sender;
    }

    //  only allows the owner to execute a function
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action.");
        _;
    }

    // Function to mint Batch NFT which only owner can perform
    function mint(uint256 quantity) external payable onlyOwner{
        require(totalSupply() + quantity <= maxQuantity ,"You can not mint more than 6");
        _mint(msg.sender, quantity);
    }
    

    // Override the baseURI function to return the base URL for the NFTs
    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    // Return the URL for the prompt description
    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
