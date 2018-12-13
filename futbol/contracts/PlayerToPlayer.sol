pragma solidity ^0.4.24;
import "./SafeMath.sol";

contract PlayertoPlayer{

    address public owner;

    struct Player{
        uint bolsa;
        uint monto;
        address wallet;
    }
    address public wallet_sistema = 0x039CEac27B6276d6452E531926E368654B590292;
    mapping (address => PlayertoPlayer) private Players;

    constructor() {
        owner = msg.sender;        
    }
    function Traspaso(int256 precio, address wallet_vendedor) public payable {
         int256 comision;
         uint cobrado;
         uint traspaso;
         comision =(int256(precio) * int256(20) / int256(100));
         cobrado=uint(comision);
         precio = (precio - comision);
         traspaso=uint(precio);
         wallet_vendedor.transfer(cobrado);
         wallet_vendedor.transfer(traspaso);
    }
    function getWalletSystem () public returns (address){
        return (wallet_sistema);
    }
    function getnumber () public returns (uint){
        return (1);
    }
    function getaddressowner () returns (address){
        return (msg.sender);
    }

}