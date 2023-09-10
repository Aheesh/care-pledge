import React from "react";
import { Menu } from "semantic-ui-react";
import Link from 'next/link'
import {
  WalletConnectModalSign,
  useConnect,
} from "@walletconnect/modal-sign-react";
import { MetaMaskSDK } from '@metamask/sdk';
import { useState } from "react";
import {createCase} from '../services';


function Navbar() {
  const projectId = '8aff2b737cf0d2d8d71b8f991e93f94c';
  const [disabled, setDisabled] = useState(false);

  // const { connect } = useConnect({
  //   requiredNamespaces: {
  //     eip155: {
  //       methods: ["eth_sendTransaction", "personal_sign"],
  //       chains: ["eip155:1"],
  //       events: ["chainChanged", "accountsChanged"],
  //     },
  //   },
  // });

  async function onConnect() {
    try {
      setDisabled(true);
      // const MMSDK = new MetaMaskSDK({dappMetadata: {name: "My Dapp", url: "https://mydapp.com"}});
      // const ethereum = MMSDK.getProvider();
      // console.log(ethereum)
      // const response = await ethereum.request({ method: 'eth_requestAccounts', params: [] });
      // const session = await connect();
      // console.log(session.acknowledged);
      // const response = await createCase(session.namespaces.eip155.accounts[0].split(':')[2]);
      // console.log(response);
    } catch (err) {
      console.error(err);
    } finally {
      setDisabled(false);
    }
  }

  return (
    <div>

      <Menu customMenu inverted>
        <Menu.Item name="Care Pledge">
          <Link href="/">
            <b>Care Pledge</b>
          </Link>
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
              name="Connect"
              // active={activeItem === 'projects'}
              onClick={onConnect}
              disabled={disabled}
            >
              Connect
              {/* Set up WalletConnectModalSign component */}
              {/* <WalletConnectModalSign
                projectId={projectId}
                metadata={{
                  name: "My Dapp",
                  description: "My Dapp description",
                  url: "https://my-dapp.com",
                  icons: ["https://my-dapp.com/logo.png"],
                }}
              /> */}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}

export default Navbar;
