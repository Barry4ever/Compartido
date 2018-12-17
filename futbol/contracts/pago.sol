pragma solidity ^0.4.24;

contract pago{
    uint public valor;
    address public vendedor = 0xbABbF64Fc88d7b845284DDa47eeeBE6Ad98863d4;
    enum Estado { Created, Locked, Inactive }
   
    address public owner;
    Estado public state;


    function Pago(uint valor1) payable {
       msg.sender.transfer(valor1);
    }

}