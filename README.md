# @web3-onboard/lukso

## Wallet module for connecting LUKSO Universal Profile Extension to Web3-Onboard

[Web3-Onboard](https://onboard.blocknative.com/) is an open-source, framework-agnostic JavaScript library to onboard users to web3 apps. This package can be used to integrate [LUKSO Universal Profiles Extension](https://chrome.google.com/webstore/detail/universal-profiles/abpickdkkbnbcoepogfhkhennhfhehfn?hl=en) support into Web3-Onboard's "Connect Wallet" modal. With this module the LUKSO Universal Profile Extension option will be shown even if the extension is not installed on the users browser or used within the LUKSO Universal Profile Extension. If selected the user will be taken to a download screen and prompted to create a LUKSO Universal Profile. For more information on LUKSO Universal Profile Extension, please refer to the [LUKSO Universal Profile developer docs](https://docs.lukso.tech/).

### Install

`npm i @web3-onboard/core @web3-onboard/lukso`

## Usage

```typescript
import Onboard from "@web3-onboard/core";
import luksoModule from "@lukso/web3-onboard-config";

// initialize the module
const lukso = luksoModule();

const injected = injectedModule({
  custom: [lukso],
  sort: (wallets) => {
    const sorted = wallets.reduce<any[]>((sorted, wallet) => {
      if (wallet.label === "Universal Profiles") {
        sorted.unshift(wallet);
      } else {
        sorted.push(wallet);
      }
      return sorted;
    }, []);
    return sorted;
  },
  displayUnavailable: ["Universal Profiles"],
});

const chains = [
  {
    id: 1,
    token: "LYX",
    label: "LUKSO Testnet",
    rpcUrl: "https://rpc.testnet.lukso.gateway.fm/",
  },
  {
    id: 2,
    token: "LYX",
    label: "LUKSO Mainnet",
    rpcUrl: "https://rpc.lukso.gateway.fm",
  },
];

const LOGO = `<svg></svg>`;

const appMetadata = {
  name: "LUKSO Test dApp",
  icon: LOGO,
  logo: LOGO,
  description: "My test dApp using Web3 Onboard",
  recommendedInjectedWallets: [
    {
      name: "Universal Profiles",
      url: "https://chrome.google.com/webstore/detail/universal-profiles/abpickdkkbnbcoepogfhkhennhfhehfn?hl=en",
    },
  ],
};

const connect: ConnectModalOptions = {
  iDontHaveAWalletLink:
    "https://chrome.google.com/webstore/detail/universal-profiles/abpickdkkbnbcoepogfhkhennhfhehfn?hl=en",
  removeWhereIsMyWalletWarning: true,
};

const onboard = Onboard({
  wallets,
  chains,
  appMetadata,
  connect,
});

const connectedWallets = await onboard.connectWallet();
console.log(connectedWallets);
```
