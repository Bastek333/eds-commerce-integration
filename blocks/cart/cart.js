// GraphQL Client
import * as mesh from '@dropins/tools/fetch-graphql.js';

// Dropin Tools
// import { initializers } from '@dropins/tools/initializer.js';

// Dropin Functions
//import * as pkg from '@dropins/storefront-cart/api.js';

// Dropin Provider
// import { render as provider } from '@dropins/storefront-cart/render.js';

// Dropin Containers
// import Cart from '@dropins/storefront-cart/containers/Cart.js';
import { readBlockConfig } from '../../scripts/aem.js';

// import MiniCart from '@dropins/storefront-cart/containers/MiniCart.js';

// Set endpoint configuration
mesh.setEndpoint('https://artdev-7hjxg3i-awxnxowa5lur4.eu-4.magentosite.cloud/graphql');

// Register and load the Cart dropin
//initializers.register(pkg.initialize);

// Mount Initializers (must be called after all initializers are registered)
//window.addEventListener('load', initializers.mount);

export default function decorate(block) {
  const config = readBlockConfig(block);
  //const cartData = pkg.getCartData();

  //console.log('cart data', cartData);

  const content = document.createRange().createContextualFragment(`<div>
    Commerce Cart dropin TEST
    <pre>${JSON.stringify(config, null, 2)}</pre>
  </div>`);

  block.textContent = '';
  block.append(content);

/*   provider.render(Cart, {
    routeProduct: (item) => `${item.url.categories.join('/')}/${item.url.urlKey}`,
    routeEmptyCartCTA: () => 'your-empty-cart-element',
    routeCheckout: () => 'your-checkout-element',
  })(block); */
}
