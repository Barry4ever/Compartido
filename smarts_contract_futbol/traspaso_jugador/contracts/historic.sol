pragma solidity ^0.4.24;
contract historic{
    struct History{

        address comprador;
        address vendedor;
        uint timestamp;
        uint value;

    }


    constructor() internal{
    }
}