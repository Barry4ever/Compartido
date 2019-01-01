var _Maths = artifacts.require("./SafeMath.sol");

module.exports = function(deployer) {
  deployer.deploy(_Maths);
};
