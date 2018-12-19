pragma solidity ^0.4.24;
contract Transfer{
    address owner;
    uint valor;
    address public idowner;
    uint idplayer;

    constructor(){
        owner = msg.sender;
    }
  

    function getidPlayer (uint _idplayer){
        idplayer=_idplayer;        
    }

    modifier isOwner(){
        require(owner == msg.sender);
        _;
    }
    
    function getidOwner (address _idowner){
        idowner = _idowner;        
    }

    function getValue (uint _value) payable {
        valor = _value;
    }
    
    function Traspaso () public isOwner payable returns (string){
        //require (owner.balance > value);
        idowner.send(10000000000000000000);
        return ("acabado");

        
    }




}


