let PlayertoPlayer = artifacts.require("./PlayertoPlayer.sol");
let pago = artifacts.require("./pago.sol");

module.exports = function(deployer){
    deployer.deploy(PlayertoPlayer);
}

module.exports = function(deployer){
    deployer.deploy(pago);
}