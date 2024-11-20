// GraphQL Client
// import * as mesh from '@dropins/tools/fetch-graphql.js';

// Dropin Tools
// import { initializers } from '@dropins/tools/initializer.js';
// import { initializers } from '@dropins/tools/initializer.js';

// Dropin Functions
import * as pkg from '@dropins/storefront-cart/api.js';

// Dropin Provider
import { render as provider } from '@dropins/storefront-cart/render.js';

// Dropin Containers
import Cart from '@dropins/storefront-cart/containers/Cart.js';
/* import { getCartData, getStoreConfig } from '@dropins/storefront-cart/api.js';
import MiniCart from '@dropins/storefront-cart/containers/MiniCart.js';
import { store } from '../../scripts/minicart/api.js'; */

import { readBlockConfig } from '../../scripts/aem.js';
// import { getConfigValue } from '../../scripts/configs.js';

// Register and load the Cart dropin
// initializers.register(pkg.initialize);

// Initialize Dropins
// initializers.register(pkg.initialize);

// window.addEventListener('load', initializers.mount);

// Set Fetch Endpoint (Service)
/* mesh.setEndpoint(await getConfigValue('commerce-endpoint'));
// mesh.setEndpoint('https://artdev-7hjxg3i-awxnxowa5lur4.eu-4.magentosite.cloud/graphql');

// Set Fetch Headers (Service)
pkg.setFetchGraphQlHeaders({
  'Content-Type': 'application/json',
  'Magento-Environment-Id': await getConfigValue('commerce-environment-id'),
  'Magento-Website-Code': await getConfigValue('commerce-website-code'),
  'Magento-Store-View-Code': await getConfigValue('commerce-store-view-code'),
  'Magento-Store-Code': await getConfigValue('commerce-store-code'),
  'Magento-Customer-Group': await getConfigValue('commerce-customer-group'),
  'x-api-key': await getConfigValue('commerce-x-api-key'),
}); */

export default function decorate(block) {
  const config = readBlockConfig(block);

  console.log('store pkg', pkg.initializeCart());

  console.log('block config', config);
  // console.log('store id', pkg.getCartData());
  console.log('store config', pkg.getConfig());
  console.log('store config cache', pkg.getCartDataFromCache());
  console.log('store pkg', pkg);

  /*   console.log('dropin cart data', getCartData());
  console.log('dropin store config', getStoreConfig());
  console.log('cart', store.getCart());
  console.log('cartid', store.getCartId()); */
  // const cartData = pkg.getCartData();

  // console.log('cart data', cartData);

  provider.render(Cart, {
    routeProduct: (item) => `${item.url.categories.join('/')}/${item.url.urlKey}`,
    routeEmptyCartCTA: () => '/',
    routeCheckout: () => '/checkout',
  })(block);

/*   provider.render(MiniCart, {
    routeProduct: (item) => `${item.url.categories.join('/')}/${item.url.urlKey}`,
    routeEmptyCartCTA: () => '/',
    routeCart: () => '/cart',
    routeCheckout: () => '/checkout',
  })(block); */
}
