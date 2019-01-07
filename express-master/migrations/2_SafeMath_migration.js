var Safe = artifacts.require("./SafeMath.sol");

module.exports = function(deployer) {
  deployer.deploy(Safe);
};
