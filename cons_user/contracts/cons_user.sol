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
        uint[] lineup;
        int[] transactions; /// Numéricas, creo que tendríamos que hacer un array del objeto transacciones.
        string wallet;
    }
    mapping (address => User) private users;
    mapping (address => bool) private joinedUsers;
    address[] total;

    function joinUser(string Name, string surName, string nick, string wallet) public{
        require(!userJoined(msg.sender));
        User storage user = users[msg.sender];
        user.name=Name;
        user.surName = surName;
        user.nick = nick;
        user.wallet = wallet;
        joinedUsers[msg.sender] = true;
        total.push(msg.sender);
    }

    function getUser (address addr) public view returns (string,string,string,string){
        require (userJoined(msg.sender));
        User memory user = users[addr];
        return (user.name, user.surName, user.nick, user.wallet);
    }

    function userJoined(address addr) private view returns (bool){
        return joinedUsers[addr];
    }
}
