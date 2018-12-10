/* Con este contract damos de alta un usuario mediante su nombre, Apellido, nick y wallet y podemos recoger los mismos datos 
dado un id de wallet, lo puedes ejecutar en remix.ethereum.org con el compilador 0.4.24+commit.e67f0147.Emscripten.clang */
pragma solidity ^0.4.24;
contract UserContract {
    struct User{
        string name;
        string surName;
        string nick;
        string team;
        uint[] points;
        uint sumPoints;
        uint amount;
        uint cash;
        uint[] lineup;
        int[] transactions; /// Numéricas, creo que tendríamos que hacer un array del objeto transacciones.
    }
    
    mapping (address => User) private users;
    mapping (address => bool) private joinedUsers;
    mapping (address => uint) private money;
    address[] total;
    address private owner;
    
    constructor() public payable{
        owner=msg.sender;
    }
    
    modifier isOwner(){
        require(owner == msg.sender);
        _;
    }
    
    function joinUser(string Name, string surName, string nick) public{
        //require(!userJoined(msg.sender));
        User storage user = users[msg.sender];
        user.name=Name;
        user.surName = surName;
        user.nick = nick;
        joinedUsers[msg.sender] = true;
        total.push(msg.sender);
    }
    

    function getUser (address addr) public view returns (string,string,string){
       // require (userJoined(msg.sender));
        //User memory user = users[addr];
        User userf = users[addr];
        return (userf.name, userf.surName, userf.nick);
    }

    function userJoined(address addr) private view returns (bool){
        return joinedUsers[addr];
    }
    
    function TransferTo (uint amount, address to) public{ // No funciona
        msg.sender.send(amount);
    }

 
}