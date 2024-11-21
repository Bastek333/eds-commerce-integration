import { render as provider } from '@dropins/storefront-auth/render.js';
import SignIn from '@dropins/storefront-auth/containers/SignIn.js';

export default async function decorate(block) {
  provider.render(SignIn)(block);
}
