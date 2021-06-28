if(window.web3) {
	console.log('metamask');
			web3Provider = window.web3.currentProvider;
		}
		else {
			web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
		}

		web3 = new Web3(web3Provider);
		
web3.eth.getAccounts(function(error,accounts){
			if(error){
				console.log(error);
			}
			var account=accounts[0];
			console.log(account);
			web3.eth.defaultAccount=account;

			

		});

    
//web3.eth.defaultAccount = web3.eth.getAccounts()[0];
//console.log(web3.eth.defaultAccount);
abi = JSON.parse('[{"constant": true,"inputs": [{"internalType": "uint256","name": "","type": "uint256"}],"name": "doctorList", "outputs": [{"internalType": "address","name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"internalType": "uint256","name": "","type": "uint256"}],"name": "insurerList","outputs": [{"internalType": "address","name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"internalType": "uint256","name": "","type": "uint256"}],"name": "patientList","outputs": [{"internalType": "address","name": "","type": "address"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"internalType": "string","name": "_name","type": "string"},{"internalType": "uint256","name": "_age","type": "uint256"},{"internalType": "uint256","name": "_designation","type": "uint256"},{"internalType": "string","name": "_hash","type": "string"}],"name": "add_agent","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"internalType": "address","name": "addr","type": "address"}],      "name": "get_patient",      "outputs": [        {          "internalType": "string",          "name": "",          "type": "string"        },        {          "internalType": "uint256",          "name": "",          "type": "uint256"        },        {          "internalType": "uint256[]",          "name": "",          "type": "uint256[]"        },        {          "internalType": "address",          "name": "",          "type": "address"        },        {          "internalType": "string",          "name": "",          "type": "string"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [        {          "internalType": "address",          "name": "addr",          "type": "address"        }      ],      "name": "get_doctor",      "outputs": [        {          "internalType": "string",          "name": "",          "type": "string"        },        {          "internalType": "uint256",          "name": "",          "type": "uint256"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [        {          "internalType": "address",          "name": "paddr",          "type": "address"        },        {          "internalType": "address",          "name": "daddr",          "type": "address"        }      ],      "name": "get_patient_doctor_name",      "outputs": [        {          "internalType": "string",          "name": "",          "type": "string"        },        {          "internalType": "string",          "name": "",          "type": "string"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [        {          "internalType": "address",          "name": "addr",          "type": "address"        }      ],      "name": "get_insurer",      "outputs": [        {          "internalType": "string",          "name": "",          "type": "string"        },        {          "internalType": "uint256",          "name": "",          "type": "uint256"        },        {          "internalType": "address[]",          "name": "",          "type": "address[]"        },        {          "internalType": "address[]",          "name": "",          "type": "address[]"        },        {          "internalType": "uint256[]",          "name": "",          "type": "uint256[]"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": false,      "inputs": [        {          "internalType": "address",          "name": "addr",          "type": "address"        }      ],      "name": "permit_access",      "outputs": [],      "payable": true,      "stateMutability": "payable",      "type": "function"    },    {      "constant": false,      "inputs": [        {          "internalType": "address payable",          "name": "iaddr",          "type": "address"        },        {          "internalType": "uint256[]",          "name": "_diagnosis",          "type": "uint256[]"        }      ],      "name": "select_insurer",      "outputs": [],      "payable": true,      "stateMutability": "payable",      "type": "function"    },    {      "constant": false,      "inputs": [        {          "internalType": "address",          "name": "paddr",          "type": "address"        },        {          "internalType": "uint256",          "name": "_diagnosis",          "type": "uint256"        },        {          "internalType": "string",          "name": "_hash",          "type": "string"        }      ],      "name": "insurance_claim",      "outputs": [],      "payable": false,      "stateMutability": "nonpayable",      "type": "function"    },    {      "constant": false,      "inputs": [        {          "internalType": "address payable",          "name": "paddr",          "type": "address"        }      ],      "name": "accept_claim",      "outputs": [],      "payable": true,      "stateMutability": "payable",      "type": "function"    },    {      "constant": false,      "inputs": [        {          "internalType": "address",          "name": "paddr",          "type": "address"        },        {          "internalType": "address",          "name": "daddr",          "type": "address"        }      ],      "name": "remove_patient",      "outputs": [],      "payable": false,      "stateMutability": "nonpayable",      "type": "function"    },    {      "constant": true,      "inputs": [        {          "internalType": "address",          "name": "addr",          "type": "address"        }      ],      "name": "get_accessed_doctorlist_for_patient",      "outputs": [        {          "internalType": "address[]",          "name": "",          "type": "address[]"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [        {          "internalType": "address",          "name": "addr",          "type": "address"        }      ],      "name": "get_accessed_patientlist_for_doctor",      "outputs": [        {          "internalType": "address[]",          "name": "",          "type": "address[]"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": false,      "inputs": [        {          "internalType": "address",          "name": "daddr",          "type": "address"        }      ],      "name": "revoke_access",      "outputs": [],      "payable": true,      "stateMutability": "payable",      "type": "function"    },    {      "constant": true,      "inputs": [],      "name": "get_patient_list",      "outputs": [        {          "internalType": "address[]",          "name": "",          "type": "address[]"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [],      "name": "get_doctor_list",      "outputs": [        {          "internalType": "address[]",          "name": "",          "type": "address[]"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [],      "name": "get_insurer_list",      "outputs": [        {          "internalType": "address[]",          "name": "",          "type": "address[]"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    },    {      "constant": true,      "inputs": [        {          "internalType": "address",          "name": "paddr",          "type": "address"        }      ],      "name": "get_hash",      "outputs": [        {          "internalType": "string",          "name": "",          "type": "string"        }      ],      "payable": false,      "stateMutability": "view",      "type": "function"    }  ]');
var AgentContract = web3.eth.contract(abi);

contractInstance = AgentContract.at('0xc7B4568EBdF396f9D78660D03b391d736fbA21b2');

