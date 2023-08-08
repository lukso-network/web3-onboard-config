import { InjectedWalletModule } from "./index.d";
import { WalletInit, createEIP1193Provider } from "@web3-onboard/common";

function lukso(): InjectedWalletModule {
  return {
    injectedNamespace: "lukso",
    label: "Universal Profiles",
    getIcon: async () => (await import("./icon.js")).default,
    checkProviderIdentity: ({ provider }) =>
      !!provider && !!provider.isUniversalProfileExtension,
    getInterface: async () => {
      if ("lukso" in window) {
        const anyWindow: any = window;

        return {
          provider: createEIP1193Provider(anyWindow.lukso),
        };
      }
      window.open(
        "https://chrome.google.com/webstore/detail/universal-profiles/abpickdkkbnbcoepogfhkhennhfhehfn?hl=en",
        "_blank"
      );
      throw new Error(
        "Please install LUKSO Universal Profile extension before proceeding"
      );
    },
    platforms: ["all"],
    externalUrl:
      "https://chrome.google.com/webstore/detail/universal-profiles/abpickdkkbnbcoepogfhkhennhfhehfn?hl=en",
  };
}

export default lukso;
