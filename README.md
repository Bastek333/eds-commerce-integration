# Edge Delivery Services + Adobe Commerce Boilerplate

This project boilerplate is for Edge Delivery Services projects that integrate with Adobe Commerce.

## Documentation

https://experienceleague.adobe.com/developer/commerce/storefront/

## Environments

- Preview: https://main--{repo}--{owner}.aem.page/
- Live: https://main--{repo}--{owner}.aem.live/

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template and add a mountpoint in the `fstab.yaml`
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Add your Adobe Commerce SaaS configuration in the `configs.xlsx` sheet in your content repository.
1. Install all dependencies using `npm i`.
1. Start AEM Proxy: `npm run up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)

## Changelog

Major changes are described and documented as part of pull requests and tracked via the `changelog` tag. To keep your project up to date, please follow this list:

https://github.com/hlxsites/aem-boilerplate-commerce/issues?q=label%3Achangelog+is%3Aclosed

## SII research

To use dropiins Magento version should be at least 2.4.7

npm install @dropins/tools @dropins/storefront-cart @dropins/storefront-checkout @dropins/storefront-auth @dropins/storefront-account @dropins/storefront-order @dropins/storefront-order-confirmation @dropins/storefront-pdp --save

head.html

<script type="importmap">
    {
        "imports": {
            "@dropins/tools/": "/scripts/__dropins__/tools/",
            "@dropins/storefront-pdp/": "/scripts/__dropins__/storefront-pdp/",
            "@dropins/storefront-cart/": "/scripts/__dropins__/storefront-cart/",
            "@dropins/storefront-checkout/": "/scripts/__dropins__/storefront-checkout/",
            "@dropins/storefront-auth/": "/scripts/__dropins__/storefront-auth/",
            "@dropins/storefront-account/": "/scripts/__dropins__/storefront-account/",
            "@dropins/storefront-order/": "/scripts/__dropins__/storefront-order/",
            "@dropins/storefront-order-confirmation/": "/scripts/__dropins__/storefront-order-confirmation/"
        }
    }
</script>

npm outdated - check for new packages (change package number to \* and run npm update --save)

For checkout feature:
scripts\_\_dropins\_\_\storefront-checkout\fragments.js - needs change from 'id' to 'uid' on 'fragment BILLING_CART_ADDRESS_FRAGMENT on BillingCartAddress' and 'fragment SHIPPING_CART_ADDRESS_FRAGMENT on ShippingCartAddress'

scripts\_\_dropins\_\_\storefront-checkout\fragments.js - 'same_as_billing' don't exist in current beta Magento graphql schema (maybe is on Adobe Magento development branch)

scripts\_\_dropins\_\_\storefront-checkout\fragments.js - 'order_status_change_date' don't exist in current beta Magento graphql schema (maybe is on Adobe Magento development branch)
scripts\_\_dropins\_\_\storefront-checkout\fragments.js - 'available_actions' don't exist in current beta Magento graphql schema (maybe is on Adobe Magento development branch)
