var Payment = artifacts.require("./PaymentSplitter.sol");
var payees = '0x216348ed9Ecc9876bFBF028DcD0Ba7Ec83E9bD72';
var share = 100;

module.exports = function(deployer) {
  deployer.deploy(Payment,payees,share);
};
