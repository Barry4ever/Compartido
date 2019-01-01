var Payment = artifacts.require("./PaymentSplitter.sol")

module.exports = function(deployer) {
  deployer.deploy(Payment);
};
