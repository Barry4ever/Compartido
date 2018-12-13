let PlayertoPlayer = artifacts.require("./PlayertoPlayer.sol");

module.exports = function(deployer){
    deployer.deploy(PlayertoPlayer);
}