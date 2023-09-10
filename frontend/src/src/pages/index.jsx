//----------------------------------------------------------------------------
import Navbar from "../Nav/Navbar";
import Head from 'next/head';
import { Container, Header, Button } from "semantic-ui-react";
import { ethers } from "ethers";
import CarePledgeCaseFactoryABI from '../Contracts/CarePledgeCaseFactory.json';
import { Network, Alchemy, Wallet, Utils } from 'alchemy-sdk';
import dotenv from "dotenv";
import { useEffect } from "react";
dotenv.config();

const settings = {
    apiKey: "nm55LXt0n2-uyklwbgnKGJpiKdqdjRh_",
    network: Network.ETH_SEPOLIA,
};
const alchemy = new Alchemy(settings);

const factory = "0x2987BEc55f255E045404e9814DcA176B8bcc8f05";
const {PRIVATE_KEY} = process.env;
const usdc = "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8";

export default function HomePage() {
  const call = async () => {
    const provider = new ethers.providers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/nm55LXt0n2-uyklwbgnKGJpiKdqdjRh_');
    const wallet = new ethers.Wallet("0faeb649b2fd06ee86f26c97baabca3719ae49bb42ecf36deff464483798d4c9", provider);
  
    // Now you can use ethers.js to interact with the connected wallet
    const signerz = provider.getSigner();
  
    let encodedVal = new ethers.utils.AbiCoder().encode(["address", "address[]"], ['0x263c0a1ff85604f0ee3f4160cAa445d0bad28dF7',['0xB19FEC2C25a620F21a0C6ACf59812983Faf5Cf9B']]);
    // Example: Send a transaction
    const transaction = {
      donationToken: usdc,
      data: encodedVal
    };

    let contract = new ethers.Contract(factory, CarePledgeCaseFactoryABI, wallet);
    console.log(contract, "alkjf")
    console.log(wallet.address)
    let overrides = {gasPrice: 100000,
      gasLimit: 2100000}
  
    let res = contract.functions.createNewCase(
      usdc, encodedVal, overrides);
  
    console.log(res);  
  
    console.log("Encoder", encodedVal);
    
    // alchemy.core.send(
    //   "eth_createNewCase",
    //   [factory, usdc, encodedVal]
    // ).then(
    //   response => console.log(response)
    // );
  }
 
  useEffect(()=> {
    call()
  },[])

  // Now you can use ethers.js to interact with the connected wallet  console.log('Connected wallet address:', signer);

  const addressCheckSum = (addr) => {
    return ethers.getAddress(addr);
  };

  // const createCase = async (patientAddress) => {
  //   console.log("Address: ", patientAddress);
  //   console.log("Balance: ", await provider.getBalance(patientAddress));
  //   // sepolia address
  //   const usdcAddress = addressCheckSum('0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8');
  //   console.log(usdcAddress);
  //   console.log("contract: ",signer);
  //   console.log("PATIENT ADDRESS:", patientAddress);
  //   console.log("TYPEOF: ", typeof(patientAddress));
  //   const encoding = new ethers.AbiCoder(
  //     ['bytes'],
  //     [addressCheckSum(patientAddress), addressCheckSum('0x263c0a1ff85604f0ee3f4160cAa445d0bad28dF7'), addressCheckSum('0xB19FEC2C25a620F21a0C6ACf59812983Faf5Cf9B')]
  //   )
  //   const response = await contract.connect(patientAddress).createNewCase(usdcAddress,encoding);
  //   console.log(response);
  //   return response;
  // };
  return (
    <>
      <Head>
        <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
      </Head>
      <Navbar></Navbar>
      <Container
      className="landing-container dark-theme"
      style={{ width: "70vw" }}
    >
      <Header
        as="h1"
        style={{
          textAlign: "left",
          fontSize: "6em",
          paddingTop: "150px",
          marginBottom: "20px",
        }}
      >
        Redefining <i>Trust</i> in <br /> <u>Medical Crowdfunding</u> by
        Blockchain Transparency.
      </Header>
      <div style={{ textAlign: "left", paddingTop: "10px" }}>
        <Button
          className="left-aligned-button"
          style={{ padding: "20px", marginRight: "20px" }}
          href="/projects"
        >
          View Projects
        </Button>
        <Button
          className="left-aligned-button"
          style={{ padding: "20px" }}
          href="/projects/create"
        >
          Start your own project
        </Button>
      </div>
      {/* <p> View Projects  | Start your own project</p> */}
    </Container>
    </>
  );
}