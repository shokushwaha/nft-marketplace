const hre = require("hardhat");
async function main() {

  const lock = await hre.ethers.getContractFactory("NFTMarketplace");
  const Lock = await lock.deploy();
  await Lock.deployed();
  console.log(
    `Deployed at ${Lock.address}`
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
