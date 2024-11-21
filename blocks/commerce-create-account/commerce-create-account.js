import { render as provider } from '@dropins/storefront-auth/render.js';
import SignUp from '@dropins/storefront-auth/containers/SignUp.js';

export default async function decorate(block) {
  provider.render(SignUp)(block);
}
