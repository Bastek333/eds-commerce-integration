# Edge Delivery Services + Adobe Commerce Boilerplate

This project boilerplate is for Edge Delivery Services projects that integrate with Adobe Commerce.

## Documentation

https://experienceleague.adobe.com/developer/commerce/storefront/

## Environments

- Preview: https://main--{repo}--{owner}.aem.page/
- Live: https://main--{repo}--{owner}.aem.live/

## Pre-requisites

Out of the box, this project template uses a pre-configured Adobe Commerce environment. If you want to use your own Adobe Commerce environment, you'll need to update the `configs.xlsx` file in your content repository to have values that match your environment.

Additionally, you need to have the following modules and customizations installed on your environment:

1. magento/magento-extra-graphql: Commerce module required for Cart and Checkout Drop-Ins.
1. magento/module-data-services-graphql: Commerce module with functionality necessary for adding context to events.
1. magento/module-page-builder-product-recommendations: Commerce module required for PRex Widget
1. magento/module-visual-product-recommendations: Commerce module required for PRex Widget
<!-- 1. TODO: Add further prereqs.  -->

## Documentation

Before using the boilerplate, we recommand you to go through the documentation on https://www.aem.live/docs/ and more specifically:

1. [Developer Tutorial](https://www.aem.live/developer/tutorial)
2. [The Anatomy of a Project](https://www.aem.live/developer/anatomy-of-a-project)
3. [Web Performance](https://www.aem.live/developer/keeping-it-100)
4. [Markup, Sections, Blocks, and Auto Blocking](https://www.aem.live/developer/markup-sections-blocks)

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate-commerce` template and add a mountpoint in the `fstab.yaml`
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Add your Adobe Commerce SaaS configuration in the `configs.xlsx` sheet in your content repository.
1. Install all dependencies using `npm i`.
1. Start AEM Proxy: `npm run up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)

## Changelog

Major changes are described and documented as part of pull requests and tracked via the `changelog` tag. To keep your project up to date, please follow this list:

https://github.com/hlxsites/aem-boilerplate-commerce/issues?q=label%3Achangelog+is%3Aclosed

## SII research

To use all Storefront capabilities with graphQL calls Adobe Compatybility package have to be installed:
https://experienceleague.adobe.com/developer/commerce/storefront/setup/storefront-compatibility/

https://experienceleague.adobe.com/developer/commerce/storefront/discovery/architecture/

To use dropiins Magento version should be at least 2.4.7

Magento2 composer requirements for EDS compatibility:
"adobe-commerce/storefront-compatibility": "^4.7",
"graycore/magento2-cors": "^2.1",
"magento/catalog-service": "^3.1",
"magento/composer-root-update-plugin": "^2.0.4",
"magento/experience-platform-connector": "^3.2",
"magento/live-search": "^4.2.1",
"magento/magento-cloud-metapackage": "2.4.8-p1",
"magento/module-data-services-graphql": "^1.2",
"magento/module-page-builder-product-recommendations": "^6.0",
"magento/module-visual-product-recommendations": "^6.0",
"magento/product-enterprise-edition": "2.4.8-beta1",
"magento/product-recommendations": "^6.0.3",
"markshust/magento2-module-disabletwofactorauth": "^2.0.2"

npm outdated - check for new packages (change package number to \* and run npm update --save)

## Old findings - now included in Adobe master branch

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
