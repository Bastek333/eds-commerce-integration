import * as pkg from '@dropins/storefront-checkout/api.js';
import { render as provider } from '@dropins/storefront-checkout/render.js';
import ShippingMethods from '@dropins/storefront-checkout/containers/ShippingMethods.js';

export default async function decorate(block) {
  await pkg.initializeCheckout();

  console.log('Decorating checkout block');

  provider.render(ShippingMethods)(block);
}
