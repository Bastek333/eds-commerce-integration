import * as pkg from '@dropins/storefront-account/api.js';
import { render as provider } from '@dropins/storefront-account/render.js';
import Addresses from '@dropins/storefront-account/containers/Addresses.js';
import { readBlockConfig } from '../../scripts/aem.js';

export default async function decorate(block) {
  const {
    'minified-view': minifiedViewConfig = 'false',
  } = readBlockConfig(block);
  let customer = null;

  try {
    customer = await pkg.getCustomer();
  } catch (error) {
    console.log('error:', error);
  }

  if (!customer) {
    window.location.href = '/customer/login';
  } else {
    await provider.render(Addresses, {
      minifiedView: minifiedViewConfig === 'true',
      withActionsInMinifiedView: false,
      withActionsInFullSizeView: true,
      routeAddressesPage: () => '/customer/address',
    })(block);
  }
}
