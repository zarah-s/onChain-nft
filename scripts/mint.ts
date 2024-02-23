
import { ethers } from "hardhat";

async function main() {
    const contractFactory = ethers.getContractAt("IOnchainNFT", "0x64c6498F6fC5106D731f01bDaDF38076334EBA7e");
    let tx = (await contractFactory).mint();
    (await tx).wait()
    console.log("done", tx)
}



main().catch(error => {
    console.error(error);
    process.exit(1);
})