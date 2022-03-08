const { upgrades, ethers } = require('hardhat');

const PROXY = '0xc23096CB5944A78727F9b70d088A8e39258D638B';

async function main() {
    const BoxV2 = await ethers.getContractFactory('BoxV2');
    await upgrades.upgradeProxy(PROXY, BoxV2);
    console.log('Box has been upgraded');
}

main();
