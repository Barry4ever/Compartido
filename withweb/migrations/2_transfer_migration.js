var Transferencia = artifacts.require("./Transferencia.sol");

module.exports = function(deployer) {
  deployer.deploy(Transferencia);
};
