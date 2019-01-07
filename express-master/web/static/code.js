// Imagina que esto es como la base de datos. Es un JSON con datos de los jugadores.
var data = {
    "messi": {
        id: "adsa87dsaf87",
        name: "messi",
        price: 32,
    },
    "ronaldo": {
        id: "09gf09jkeksds",
        name: "ronaldo",
        price: 30
    },
    "marquez": {
        id: "oy976ou09uoitroiy",
        name: "marquez",
        price: 0.0002
    },
    "dani": {
        id: "894389re98je98j",
        name: "dani",
        price: 178
    },
};

var Web3= require('web3');

// Esta función se llama en el momento de pulsar el boton "pujar!"

function enviar_formulario(){
    // URL donde hacer la llamada:
    const url = "https://jsonplaceholder.typicode.com/posts";
    if (typeof web3 !== 'undefined'){
        web3 = new Web3 (web3.currentProvider);
    }else{
        web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"))
    }
    // recogemos el wallet del usuario que ejecuta la dapp, llamado owner
    web3.eth.defaultAccount = web3.eth.accounts[0];
    //
    
    
    

    




    //var abi =[{"constant":false,"inputs":[{"name": "account","type": "address"}],"name": "release_bussiness", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x0b8c54b2"},{"constant":true,"inputs":[],"name":"totalShares", "outputs": [{"name":"","type":"uint256"}], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x3a98ef39"     },     { "constant": false, "inputs": [   {     "name": "account",     "type": "address"   } ], "name": "release_vendor", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x65c7a61c"     },     { "constant": true, "inputs": [   {     "name": "index",     "type": "uint256"   } ], "name": "payee", "outputs": [   {     "name": "",     "type": "address"   } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x8b83209b"     },     { "constant": true, "inputs": [   {     "name": "account",     "type": "address"   } ], "name": "released", "outputs": [   {     "name": "",     "type": "uint256"   } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x9852595c"     },     { "constant": true, "inputs": [   {     "name": "account",     "type": "address"   } ], "name": "shares", "outputs": [   {     "name": "",     "type": "uint256"   } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0xce7c2ac2"     },     { "constant": true, "inputs": [], "name": "totalReleased", "outputs": [   {     "name": "",     "type": "uint256"   } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0xe33b7de3"     },     { "payable": true, "stateMutability": "payable", "type": "fallback"     },     { "anonymous": false, "inputs": [   {     "indexed": false,     "name": "from",     "type": "address"   },   {     "indexed": false,     "name": "amount",     "type": "uint256"   } ], "name": "PaymentReceived", "type": "event", "signature": "0x6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be770"     },     { "anonymous": false, "inputs": [   {     "indexed": false,     "name": "account",     "type": "address"   },   {     "indexed": false,     "name": "shares",     "type": "uint256"   } ], "name": "PayeeAdded", "type": "event", "signature": "0x40c340f65e17194d14ddddb073d3c9f888e3cb52b5aae0c6c7706b4fbc905fac"     },     { "anonymous": false, "inputs": [   {     "indexed": false,     "name": "to",     "type": "address"   },   {     "indexed": false,     "name": "amount",     "type": "uint256"   } ], "name": "PaymentReleased", "type": "event", "signature": "0xdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b056"     },     { "constant": false, "inputs": [   {     "name": "_to",     "type": "address"   } ], "name": "GetWalletSeller", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x0dcad955"     },     { "constant": false, "inputs": [   {     "name": "wallet_bussiness",     "type": "address"   } ], "name": "PaytoBussiness", "outputs": [   {     "name": "",     "type": "bool"   } ], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x2210c219"}];
    //var Transaction = web3.eth.contract(abi);
    //  var Transaction = new web3.eth.Contract(abi,owner);
    
    //Transaction.methods.function().call().then(console.log)
    // Datos que se enviarian para relaizad la tansaccion:
    const datos_a_enviar = {
        body: {
            jugador_a_comprar: {},
            usuario_de_la_transaccion: {}
        },
        method: "POST"
    };
//********************************************************************* */
    if (typeof web3 !== 'undefined'){
        web3 = new Web3 (web3.currentProvider);
    }else{
        web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"))
    }

    web3.eth.defaultAccount = web3.eth.accounts[0];

    var abiDefinition = [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "release_bussiness",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalShares",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "release_vendor",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "payee",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "released",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "shares",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalReleased",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "payees",
                    "type": "address"
                },
                {
                    "name": "shares",
                    "type": "uint256"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "constructor"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "shares",
                    "type": "uint256"
                }
            ],
            "name": "PayeeAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "PaymentReleased",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "PaymentReceived",
            "type": "event"
        }
    ];
    var byteco = {
	"linkReferences": {},
	"object": "6080604052604051604080610b2683398101806040528101908080519060200190929190805190602001909291905050506100498282610050640100000000026401000000009004565b505061024b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561008c57600080fd5b60008111151561009b57600080fd5b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415156100e957600080fd5b60048290806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506101b58160005461022a64010000000002610817179091906401000000009004565b6000819055507f40c340f65e17194d14ddddb073d3c9f888e3cb52b5aae0c6c7706b4fbc905fac8282604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15050565b600080828401905083811015151561024157600080fd5b8091505092915050565b6108cc8061025a6000396000f300608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630b8c54b2146100f05780633a98ef391461013357806365c7a61c1461015e5780638b83209b146101a15780639852595c1461020e578063ce7c2ac214610265578063e33b7de3146102bc575b7f6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be7703334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1005b3480156100fc57600080fd5b50610131600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102e7565b005b34801561013f57600080fd5b5061014861050b565b6040518082815260200191505060405180910390f35b34801561016a57600080fd5b5061019f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610514565b005b3480156101ad57600080fd5b506101cc60048036038101908080359060200190929190505050610738565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561021a57600080fd5b5061024f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061077b565b6040518082815260200191505060405180910390f35b34801561027157600080fd5b506102a6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107c4565b6040518082815260200191505060405180910390f35b3480156102c857600080fd5b506102d161080d565b6040518082815260200191505060405180910390f35b600080600080600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411151561033957600080fd5b601492506103696001543073ffffffffffffffffffffffffffffffffffffffff163161081790919063ffffffff16565b91506103916064610383858561083890919063ffffffff16565b61087690919063ffffffff16565b9050600081141515156103a357600080fd5b6103f581600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461081790919063ffffffff16565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061044d8160015461081790919063ffffffff16565b6001819055508373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610499573d6000803e3d6000fd5b507fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b0568482604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150505050565b60008054905090565b600080600080600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411151561056657600080fd5b605092506105966001543073ffffffffffffffffffffffffffffffffffffffff163161081790919063ffffffff16565b91506105be60646105b0858561083890919063ffffffff16565b61087690919063ffffffff16565b9050600081141515156105d057600080fd5b61062281600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461081790919063ffffffff16565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061067a8160015461081790919063ffffffff16565b6001819055508373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156106c6573d6000803e3d6000fd5b507fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b0568482604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150505050565b600060048281548110151561074957fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600154905090565b600080828401905083811015151561082e57600080fd5b8091505092915050565b600080600084141561084d576000915061086f565b828402905082848281151561085e57fe5b0414151561086b57600080fd5b8091505b5092915050565b60008060008311151561088857600080fd5b828481151561089357fe5b04905080915050929150505600a165627a7a72305820850e912b327e25650ce551d7c70e34294ff398a11afa28da7dfb8919ab4a26be0029",
	"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x40 MLOAD PUSH1 0x40 DUP1 PUSH2 0xB26 DUP4 CODECOPY DUP2 ADD DUP1 PUSH1 0x40 MSTORE DUP2 ADD SWAP1 DUP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x49 DUP3 DUP3 PUSH2 0x50 PUSH5 0x100000000 MUL PUSH5 0x100000000 SWAP1 DIV JUMP JUMPDEST POP POP PUSH2 0x24B JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO ISZERO ISZERO PUSH2 0x8C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP2 GT ISZERO ISZERO PUSH2 0x9B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x2 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD EQ ISZERO ISZERO PUSH2 0xE9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x4 DUP3 SWAP1 DUP1 PUSH1 0x1 DUP2 SLOAD ADD DUP1 DUP3 SSTORE DUP1 SWAP2 POP POP SWAP1 PUSH1 0x1 DUP3 SUB SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 ADD PUSH1 0x0 SWAP1 SWAP2 SWAP3 SWAP1 SWAP2 SWAP1 SWAP2 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP POP DUP1 PUSH1 0x2 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH2 0x1B5 DUP2 PUSH1 0x0 SLOAD PUSH2 0x22A PUSH5 0x100000000 MUL PUSH2 0x817 OR SWAP1 SWAP2 SWAP1 PUSH5 0x100000000 SWAP1 DIV JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 SSTORE POP PUSH32 0x40C340F65E17194D14DDDDB073D3C9F888E3CB52B5AAE0C6C7706B4FBC905FAC DUP3 DUP3 PUSH1 0x40 MLOAD DUP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 DUP3 DUP5 ADD SWAP1 POP DUP4 DUP2 LT ISZERO ISZERO ISZERO PUSH2 0x241 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x8CC DUP1 PUSH2 0x25A PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x83 JUMPI PUSH1 0x0 CALLDATALOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 SWAP1 DIV PUSH4 0xFFFFFFFF AND DUP1 PUSH4 0xB8C54B2 EQ PUSH2 0xF0 JUMPI DUP1 PUSH4 0x3A98EF39 EQ PUSH2 0x133 JUMPI DUP1 PUSH4 0x65C7A61C EQ PUSH2 0x15E JUMPI DUP1 PUSH4 0x8B83209B EQ PUSH2 0x1A1 JUMPI DUP1 PUSH4 0x9852595C EQ PUSH2 0x20E JUMPI DUP1 PUSH4 0xCE7C2AC2 EQ PUSH2 0x265 JUMPI DUP1 PUSH4 0xE33B7DE3 EQ PUSH2 0x2BC JUMPI JUMPDEST PUSH32 0x6EF95F06320E7A25A04A175CA677B7052BDD97131872C2192525A629F51BE770 CALLER CALLVALUE PUSH1 0x40 MLOAD DUP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xFC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x131 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x2E7 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x13F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x148 PUSH2 0x50B JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x16A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19F PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x514 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1AD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1CC PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x738 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x21A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x24F PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x77B JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x271 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2A6 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x7C4 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2C8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2D1 PUSH2 0x80D JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x2 PUSH1 0x0 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD GT ISZERO ISZERO PUSH2 0x339 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x14 SWAP3 POP PUSH2 0x369 PUSH1 0x1 SLOAD ADDRESS PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND BALANCE PUSH2 0x817 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST SWAP2 POP PUSH2 0x391 PUSH1 0x64 PUSH2 0x383 DUP6 DUP6 PUSH2 0x838 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH2 0x876 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST SWAP1 POP PUSH1 0x0 DUP2 EQ ISZERO ISZERO ISZERO PUSH2 0x3A3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x3F5 DUP2 PUSH1 0x3 PUSH1 0x0 DUP8 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH2 0x817 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x3 PUSH1 0x0 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH2 0x44D DUP2 PUSH1 0x1 SLOAD PUSH2 0x817 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x1 DUP2 SWAP1 SSTORE POP DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC DUP3 SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x499 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP PUSH32 0xDF20FD1E76BC69D672E4814FAFB2C449BBA3A5369D8359ADF9E05E6FDE87B056 DUP5 DUP3 PUSH1 0x40 MLOAD DUP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x2 PUSH1 0x0 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD GT ISZERO ISZERO PUSH2 0x566 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x50 SWAP3 POP PUSH2 0x596 PUSH1 0x1 SLOAD ADDRESS PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND BALANCE PUSH2 0x817 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST SWAP2 POP PUSH2 0x5BE PUSH1 0x64 PUSH2 0x5B0 DUP6 DUP6 PUSH2 0x838 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH2 0x876 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST SWAP1 POP PUSH1 0x0 DUP2 EQ ISZERO ISZERO ISZERO PUSH2 0x5D0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x622 DUP2 PUSH1 0x3 PUSH1 0x0 DUP8 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH2 0x817 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x3 PUSH1 0x0 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH2 0x67A DUP2 PUSH1 0x1 SLOAD PUSH2 0x817 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x1 DUP2 SWAP1 SSTORE POP DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC DUP3 SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x6C6 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP PUSH32 0xDF20FD1E76BC69D672E4814FAFB2C449BBA3A5369D8359ADF9E05E6FDE87B056 DUP5 DUP3 PUSH1 0x40 MLOAD DUP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x4 DUP3 DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0x749 JUMPI INVALID JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x3 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 DUP3 DUP5 ADD SWAP1 POP DUP4 DUP2 LT ISZERO ISZERO ISZERO PUSH2 0x82E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP5 EQ ISZERO PUSH2 0x84D JUMPI PUSH1 0x0 SWAP2 POP PUSH2 0x86F JUMP JUMPDEST DUP3 DUP5 MUL SWAP1 POP DUP3 DUP5 DUP3 DUP2 ISZERO ISZERO PUSH2 0x85E JUMPI INVALID JUMPDEST DIV EQ ISZERO ISZERO PUSH2 0x86B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 SWAP2 POP JUMPDEST POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP4 GT ISZERO ISZERO PUSH2 0x888 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 DUP5 DUP2 ISZERO ISZERO PUSH2 0x893 JUMPI INVALID JUMPDEST DIV SWAP1 POP DUP1 SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 DUP6 0xe SWAP2 0x2b ORIGIN PUSH31 0x25650CE551D7C70E34294FF398A11AFA28DA7DFB8919AB4A26BE0029000000 ",
	"sourceMap": "239:3320:0:-;;;714:96;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;780:25;790:6;798;780:9;;;:25;;;:::i;:::-;714:96;;239:3320;;3248:309;3342:1;3323:21;;:7;:21;;;;3315:30;;;;;;;;3369:1;3359:7;:11;3351:20;;;;;;;;3405:1;3385:7;:16;3393:7;3385:16;;;;;;;;;;;;;;;;:21;3377:30;;;;;;;;3414:7;3427;3414:21;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;3414:21:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3460:7;3441;:16;3449:7;3441:16;;;;;;;;;;;;;;;:26;;;;3488:25;3505:7;3488:12;;:16;;;;;;:25;;;;;:::i;:::-;3473:12;:40;;;;3524:28;3535:7;3544;3524:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;3248:309;;:::o;1272:131:1:-;1330:7;1345:9;1361:1;1357;:5;1345:17;;1381:1;1376;:6;;1368:15;;;;;;;;1397:1;1390:8;;1272:131;;;;;:::o;239:3320:0:-;;;;;;;"
    };
    var contractaddress = '0x63622499e2687A1d25cFCEC6447edeDA37f20367';
    var myContract = new web3.eth.Contract(abiDefinition, contractaddress);
    

    // Añadido

    // Variable donde se muestran los resultados:
    var resultado = document.getElementById('resultado');
    // Limpiar el campo resultado:
    resultado.innerText = "";

    // Variable del nombre del jugador seleccionado en la web:
    var player = document.querySelector('input[name="player"]:checked').value;

   
    
    // Solo para mostrar en la consola los datos. Pulsa F12 en el navegador para ver el resultado.
    console.clear();
    //console.log(data[player]);
    console.log(puja);
    console.log(vendedor);
    /******************************************************************** */
    console.log("Owner "+ web3.eth.defaultAccount);
    console.log("Deployed address: " + myContract.address);
    

   //console.log(web3.eth.defaultAccount +" ",vendedor+" ",puja+" ",byteco+" ",web3.eth.defaultAccount+" ",7000000);


    // Esta funcion hace una llamada a la URL indicada:
    fetch(url, datos_a_enviar)
        // Recogemos lo que devuelve la API y lo convertimos a JSON:
        .then( data => { return data.json() } )

        // "res" son los datos ya convertidos a JSON.
        .then( res => {
            // Mostramos el resultado en la web
            resultado.append(res.toSource());
        } );
}



/* ****************************************************************************************************** */

function enviar_formulario2(){
    const url = 'http://localhost:3000/recibir_datos_en_el_servidor';
    const datos_a_enviar = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: 1, texto: 'datos que se envian al servidor desde el cliente'}),
        method: "POST"
    };
/****************************************************************** */
if (typeof web3 !== 'undefined'){
    web3 = new Web3 (web3.currentProvider);
}else{
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"))
}

web3.eth.defaultAccount = web3.eth.accounts[0];

var abiDefinition = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "account",
                "type": "address"
            }
        ],
        "name": "release_bussiness",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalShares",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "account",
                "type": "address"
            }
        ],
        "name": "release_vendor",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "payee",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "account",
                "type": "address"
            }
        ],
        "name": "released",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "account",
                "type": "address"
            }
        ],
        "name": "shares",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalReleased",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "payees",
                "type": "address"
            },
            {
                "name": "shares",
                "type": "uint256"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "account",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "shares",
                "type": "uint256"
            }
        ],
        "name": "PayeeAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "PaymentReleased",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "PaymentReceived",
        "type": "event"
    }
];
var byteco = {
"linkReferences": {},
"object": "6080604052604051604080610b2683398101806040528101908080519060200190929190805190602001909291905050506100498282610050640100000000026401000000009004565b505061024b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561008c57600080fd5b60008111151561009b57600080fd5b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415156100e957600080fd5b60048290806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506101b58160005461022a64010000000002610817179091906401000000009004565b6000819055507f40c340f65e17194d14ddddb073d3c9f888e3cb52b5aae0c6c7706b4fbc905fac8282604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15050565b600080828401905083811015151561024157600080fd5b8091505092915050565b6108cc8061025a6000396000f300608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630b8c54b2146100f05780633a98ef391461013357806365c7a61c1461015e5780638b83209b146101a15780639852595c1461020e578063ce7c2ac214610265578063e33b7de3146102bc575b7f6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be7703334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1005b3480156100fc57600080fd5b50610131600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102e7565b005b34801561013f57600080fd5b5061014861050b565b6040518082815260200191505060405180910390f35b34801561016a57600080fd5b5061019f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610514565b005b3480156101ad57600080fd5b506101cc60048036038101908080359060200190929190505050610738565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561021a57600080fd5b5061024f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061077b565b6040518082815260200191505060405180910390f35b34801561027157600080fd5b506102a6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107c4565b6040518082815260200191505060405180910390f35b3480156102c857600080fd5b506102d161080d565b6040518082815260200191505060405180910390f35b600080600080600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411151561033957600080fd5b601492506103696001543073ffffffffffffffffffffffffffffffffffffffff163161081790919063ffffffff16565b91506103916064610383858561083890919063ffffffff16565b61087690919063ffffffff16565b9050600081141515156103a357600080fd5b6103f581600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461081790919063ffffffff16565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061044d8160015461081790919063ffffffff16565b6001819055508373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610499573d6000803e3d6000fd5b507fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b0568482604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150505050565b60008054905090565b600080600080600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411151561056657600080fd5b605092506105966001543073ffffffffffffffffffffffffffffffffffffffff163161081790919063ffffffff16565b91506105be60646105b0858561083890919063ffffffff16565b61087690919063ffffffff16565b9050600081141515156105d057600080fd5b61062281600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461081790919063ffffffff16565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061067a8160015461081790919063ffffffff16565b6001819055508373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156106c6573d6000803e3d6000fd5b507fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b0568482604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150505050565b600060048281548110151561074957fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600154905090565b600080828401905083811015151561082e57600080fd5b8091505092915050565b600080600084141561084d576000915061086f565b828402905082848281151561085e57fe5b0414151561086b57600080fd5b8091505b5092915050565b60008060008311151561088857600080fd5b828481151561089357fe5b04905080915050929150505600a165627a7a72305820850e912b327e25650ce551d7c70e34294ff398a11afa28da7dfb8919ab4a26be0029",
"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x40 MLOAD PUSH1 0x40 DUP1 PUSH2 0xB26 DUP4 CODECOPY DUP2 ADD DUP1 PUSH1 0x40 MSTORE DUP2 ADD SWAP1 DUP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x49 DUP3 DUP3 PUSH2 0x50 PUSH5 0x100000000 MUL PUSH5 0x100000000 SWAP1 DIV JUMP JUMPDEST POP POP PUSH2 0x24B JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO ISZERO ISZERO PUSH2 0x8C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP2 GT ISZERO ISZERO PUSH2 0x9B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x2 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD EQ ISZERO ISZERO PUSH2 0xE9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x4 DUP3 SWAP1 DUP1 PUSH1 0x1 DUP2 SLOAD ADD DUP1 DUP3 SSTORE DUP1 SWAP2 POP POP SWAP1 PUSH1 0x1 DUP3 SUB SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 ADD PUSH1 0x0 SWAP1 SWAP2 SWAP3 SWAP1 SWAP2 SWAP1 SWAP2 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP POP DUP1 PUSH1 0x2 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH2 0x1B5 DUP2 PUSH1 0x0 SLOAD PUSH2 0x22A PUSH5 0x100000000 MUL PUSH2 0x817 OR SWAP1 SWAP2 SWAP1 PUSH5 0x100000000 SWAP1 DIV JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 SSTORE POP PUSH32 0x40C340F65E17194D14DDDDB073D3C9F888E3CB52B5AAE0C6C7706B4FBC905FAC DUP3 DUP3 PUSH1 0x40 MLOAD DUP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 DUP3 DUP5 ADD SWAP1 POP DUP4 DUP2 LT ISZERO ISZERO ISZERO PUSH2 0x241 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x8CC DUP1 PUSH2 0x25A PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x83 JUMPI PUSH1 0x0 CALLDATALOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 SWAP1 DIV PUSH4 0xFFFFFFFF AND DUP1 PUSH4 0xB8C54B2 EQ PUSH2 0xF0 JUMPI DUP1 PUSH4 0x3A98EF39 EQ PUSH2 0x133 JUMPI DUP1 PUSH4 0x65C7A61C EQ PUSH2 0x15E JUMPI DUP1 PUSH4 0x8B83209B EQ PUSH2 0x1A1 JUMPI DUP1 PUSH4 0x9852595C EQ PUSH2 0x20E JUMPI DUP1 PUSH4 0xCE7C2AC2 EQ PUSH2 0x265 JUMPI DUP1 PUSH4 0xE33B7DE3 EQ PUSH2 0x2BC JUMPI JUMPDEST PUSH32 0x6EF95F06320E7A25A04A175CA677B7052BDD97131872C2192525A629F51BE770 CALLER CALLVALUE PUSH1 0x40 MLOAD DUP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xFC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x131 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x2E7 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x13F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x148 PUSH2 0x50B JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x16A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19F PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x514 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1AD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1CC PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x738 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x21A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x24F PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x77B JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x271 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2A6 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP PUSH2 0x7C4 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2C8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x2D1 PUSH2 0x80D JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x2 PUSH1 0x0 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD GT ISZERO ISZERO PUSH2 0x339 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x14 SWAP3 POP PUSH2 0x369 PUSH1 0x1 SLOAD ADDRESS PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND BALANCE PUSH2 0x817 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST SWAP2 POP PUSH2 0x391 PUSH1 0x64 PUSH2 0x383 DUP6 DUP6 PUSH2 0x838 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH2 0x876 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST SWAP1 POP PUSH1 0x0 DUP2 EQ ISZERO ISZERO ISZERO PUSH2 0x3A3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x3F5 DUP2 PUSH1 0x3 PUSH1 0x0 DUP8 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH2 0x817 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x3 PUSH1 0x0 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH2 0x44D DUP2 PUSH1 0x1 SLOAD PUSH2 0x817 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x1 DUP2 SWAP1 SSTORE POP DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC DUP3 SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x499 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP PUSH32 0xDF20FD1E76BC69D672E4814FAFB2C449BBA3A5369D8359ADF9E05E6FDE87B056 DUP5 DUP3 PUSH1 0x40 MLOAD DUP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x2 PUSH1 0x0 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD GT ISZERO ISZERO PUSH2 0x566 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x50 SWAP3 POP PUSH2 0x596 PUSH1 0x1 SLOAD ADDRESS PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND BALANCE PUSH2 0x817 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST SWAP2 POP PUSH2 0x5BE PUSH1 0x64 PUSH2 0x5B0 DUP6 DUP6 PUSH2 0x838 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH2 0x876 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST SWAP1 POP PUSH1 0x0 DUP2 EQ ISZERO ISZERO ISZERO PUSH2 0x5D0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x622 DUP2 PUSH1 0x3 PUSH1 0x0 DUP8 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH2 0x817 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x3 PUSH1 0x0 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP PUSH2 0x67A DUP2 PUSH1 0x1 SLOAD PUSH2 0x817 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x1 DUP2 SWAP1 SSTORE POP DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC DUP3 SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x6C6 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP PUSH32 0xDF20FD1E76BC69D672E4814FAFB2C449BBA3A5369D8359ADF9E05E6FDE87B056 DUP5 DUP3 PUSH1 0x40 MLOAD DUP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG1 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x4 DUP3 DUP2 SLOAD DUP2 LT ISZERO ISZERO PUSH2 0x749 JUMPI INVALID JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 ADD PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x3 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 DUP3 DUP5 ADD SWAP1 POP DUP4 DUP2 LT ISZERO ISZERO ISZERO PUSH2 0x82E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP5 EQ ISZERO PUSH2 0x84D JUMPI PUSH1 0x0 SWAP2 POP PUSH2 0x86F JUMP JUMPDEST DUP3 DUP5 MUL SWAP1 POP DUP3 DUP5 DUP3 DUP2 ISZERO ISZERO PUSH2 0x85E JUMPI INVALID JUMPDEST DIV EQ ISZERO ISZERO PUSH2 0x86B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 SWAP2 POP JUMPDEST POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP4 GT ISZERO ISZERO PUSH2 0x888 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 DUP5 DUP2 ISZERO ISZERO PUSH2 0x893 JUMPI INVALID JUMPDEST DIV SWAP1 POP DUP1 SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 DUP6 0xe SWAP2 0x2b ORIGIN PUSH31 0x25650CE551D7C70E34294FF398A11AFA28DA7DFB8919AB4A26BE0029000000 ",
"sourceMap": "239:3320:0:-;;;714:96;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;780:25;790:6;798;780:9;;;:25;;;:::i;:::-;714:96;;239:3320;;3248:309;3342:1;3323:21;;:7;:21;;;;3315:30;;;;;;;;3369:1;3359:7;:11;3351:20;;;;;;;;3405:1;3385:7;:16;3393:7;3385:16;;;;;;;;;;;;;;;;:21;3377:30;;;;;;;;3414:7;3427;3414:21;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;3414:21:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3460:7;3441;:16;3449:7;3441:16;;;;;;;;;;;;;;;:26;;;;3488:25;3505:7;3488:12;;:16;;;;;;:25;;;;;:::i;:::-;3473:12;:40;;;;3524:28;3535:7;3544;3524:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;3248:309;;:::o;1272:131:1:-;1330:7;1345:9;1361:1;1357;:5;1345:17;;1381:1;1376;:6;;1368:15;;;;;;;;1397:1;1390:8;;1272:131;;;;;:::o;239:3320:0:-;;;;;;;"
};
var contractaddress = '0x63622499e2687A1d25cFCEC6447edeDA37f20367';
var myContract = new web3.eth.Contract(abiDefinition, contractaddress);
/****************************************************************************** */
 // Cantidad introducida para la puja/compra del jugador seleccionado:
 var puja = document.getElementById('puja').value;
 var vendedor = document.getElementById('idvendedor').value;

    // Limpiar los resultados en el html:
    document.getElementById('resultado').innerText = "";

     // Variable del nombre del jugador seleccionado en la web:
     var player = document.querySelector('input[name="player"]:checked').value;

     // Cantidad introducida para la puja/compra del jugador seleccionado:
    // var puja = document.getElementById('puja').value;
     //var vendedor = document.getElementById('idvendedor').value;

    console.clear();
    console.log(data[player]);
    console.log(puja);
    console.log(vendedor);

    /***************************************** */
    console.log("Owner "+ web3.eth.defaultAccount);
    console.log("Deployed address: " + myContract.address);


    fetch(url, datos_a_enviar)
        // Recogemos lo que devuelve la API y lo convertimos a JSON:
        .then( data => { return data.json() } )

        // "res" son los datos ya convertidos a JSON.
        .then( res => {
            // Mostramos el resultado en la web
            resultado.append(res.toSource());
        } );
}
