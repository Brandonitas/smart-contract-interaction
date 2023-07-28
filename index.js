require("dotenv").config();
const ethers = require("ethers");

const contractAbi = [
  {
    inputs: [],
    name: "count",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "get",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "inc",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const provider = new ethers.AlchemyProvider(
  "goerli",
  process.env.ALCHEMY_API_KEY
);

const wallet = new ethers.Wallet(process.env.TESTNET_PRIVATE_KEY, provider);

async function main() {
  //https://goerli.etherscan.io/address/0x5f91ecd82b662d645b15fd7d2e20e5e5701ccb7a#code
  const counterContract = new ethers.Contract(
    "0x5F91eCd82b662D645b15Fd7D2e20E5e5701CCB7A",
    contractAbi,
    //provider, -> si solo queremos leer solo necesitmaos el provider
    wallet //Como queremos firmar las transacciones necesitamos la wallet
  );

  const currentCounterValue = await counterContract.get();
  console.log(currentCounterValue);

  //await counterContract.inc();

  //const currentCounterValueNew = await counterContract.get();
  //console.log(currentCounterValueNew);
}

main();
