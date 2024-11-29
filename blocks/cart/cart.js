import * as pkg from '@dropins/storefront-cart/api.js';
import { render as provider } from '@dropins/storefront-cart/render.js';
import Cart from '@dropins/storefront-cart/containers/Cart.js';

export default async function decorate(block) {
  await pkg.initializeCart();

  provider.render(Cart, {
    routeProduct: (item) => `${item.url.categories.join('/')}/${item.url.urlKey}`,
    routeEmptyCartCTA: () => '/',
    routeCheckout: () => '/checkout',
  })(block);
}
