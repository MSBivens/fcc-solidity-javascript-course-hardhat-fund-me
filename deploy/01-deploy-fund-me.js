// function deployFunc() {
//     console.log("Hi!")
// }

// module.exports.default = deployFunc

// module.exports = async (hre) => {
//     const { getNamedAccounts, deployments } = hre
// }
const { networkConfig } = require("../helper-hardhat-config")
const { network } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    // if chainId is x use address y, if chainId is z use address a
    const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]

    // if the contract doesn't exist, we deploy a minimal version of it for local testing

    // What happens when we want to change chains?
    // When going for localhost or hardhat network we want to use a mock
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [address], // put price feed address
        log: true,
    })
}
