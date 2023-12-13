//1- connect metamask
let account;
const accessToMetamask = async () => {
    if(window.ethereum !== "undefined") {
        const accounts = await ethereum.request({ method: "eth_requestAccounts"});
        account = accounts[0];
        console.log("connected to account" + account);
    }
}

 //2- connect to smart contract
 const accessToContract = async () => {
    const ABI = [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_add",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_loc",
                    "type": "string"
                }
            ],
            "name": "addCenter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_add",
                    "type": "address"
                }
            ],
            "name": "addCustomer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_add",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_loc",
                    "type": "string"
                }
            ],
            "name": "addFarm",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_id",
                    "type": "string"
                },
                {
                    "internalType": "uint8[3]",
                    "name": "_ratings",
                    "type": "uint8[3]"
                },
                {
                    "internalType": "string",
                    "name": "_comment",
                    "type": "string"
                }
            ],
            "name": "addRating",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_add",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_loc",
                    "type": "string"
                }
            ],
            "name": "addRetailer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "durianid",
                    "type": "string"
                }
            ],
            "name": "BuyByCustomer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_id",
                    "type": "string"
                }
            ],
            "name": "buyFromRetailer",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getUnsoldDurians",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "",
                    "type": "string[]"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "durianid",
                    "type": "string"
                }
            ],
            "name": "HarvestByFarmer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint8",
                    "name": "_tree",
                    "type": "uint8"
                },
                {
                    "internalType": "string",
                    "name": "_types",
                    "type": "string"
                },
                {
                    "internalType": "uint16",
                    "name": "_weight",
                    "type": "uint16"
                },
                {
                    "internalType": "uint16",
                    "name": "_price",
                    "type": "uint16"
                }
            ],
            "name": "harvestDurian",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "durianid",
                    "type": "string"
                }
            ],
            "name": "RateByCustomer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "durianid",
                    "type": "string"
                }
            ],
            "name": "SendToCenter",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_id",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "distributionInfo",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_delivery",
                    "type": "string"
                }
            ],
            "name": "sendToDistribution",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "durianid",
                    "type": "string"
                }
            ],
            "name": "SendToRetail",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_id",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "retailerInfo",
                    "type": "address"
                }
            ],
            "name": "sendToRetailer",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "buyer",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_add",
                    "type": "address"
                }
            ],
            "name": "getAddName",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "",
                    "type": "string[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getAllCenter",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getAllDuriansByAddress",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "",
                    "type": "string[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getAllFarms",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getAllRetailer",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_id",
                    "type": "string"
                }
            ],
            "name": "getDurianDetail",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint8",
                            "name": "tree",
                            "type": "uint8"
                        },
                        {
                            "internalType": "string",
                            "name": "types",
                            "type": "string"
                        },
                        {
                            "internalType": "uint16",
                            "name": "price",
                            "type": "uint16"
                        },
                        {
                            "internalType": "uint16",
                            "name": "weight",
                            "type": "uint16"
                        },
                        {
                            "internalType": "uint256",
                            "name": "harvestDate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "farmid",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "centerid",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "distributeDate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "deliveryMethod",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "retailer",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "retailDate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "customer",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "soldDate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint8[3]",
                            "name": "ratings",
                            "type": "uint8[3]"
                        },
                        {
                            "internalType": "string",
                            "name": "comment",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct DurianSupplyChain.Durian",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getParticipantsSize",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    
    const Address = "0x5D19EBab21B0cBF78D0d9b472F70C45F955f2EFB";
    //127.0.0.1:5000
    window.web3 = await new Web3(window.ethereum); //how to access to smart contract 
    window.contract = await new window.web3.eth.Contract( ABI, Address); //how you create an instance of that contract by using the abi and address  
    console.log("connected to Product smart contract");
}