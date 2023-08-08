import { Device, Platform, WalletModule } from "@web3-onboard/common";

export interface InjectedWalletModule extends WalletModule {
  injectedNamespace: string;
  checkProviderIdentity: (helpers: {
    provider: any;
    device: Device;
  }) => boolean;
  platforms: Platform[];
  /**
   * A Url to link users to a download page for the wallet
   * to be shown if not installed or available on the browser
   */
  externalUrl?: string;
}
