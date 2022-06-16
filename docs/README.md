

# SHIPPING THERMOMETER

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

 This component renders a thermometer which fills up accordng to the amount of money left to receive free shipping.
 
 ![targetthermometer](https://user-images.githubusercontent.com/62782975/173135293-6adf7ee7-52fc-4af5-a8ed-b90b6f346690.JPG)




## Configuration

In order to use this component you must:

1. Add the dependency `"itgloberspartnercl.shipping-thermometer": "0.x"` to `manifest.json`;
2. Declare the block `shipping-thermometer` and add it to the minicart.

![image](https://user-images.githubusercontent.com/62782975/173134448-9110385b-6e03-4655-9b4e-dfd007806772.png)


### `shipping-thermometer` props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `promotionID`      | `String`       | promo ID       | `XXXXXX`        |

The promo ID can be retrieved from: *{workspace}--{vendor}.myvtex.com/api/rnb/pvt/benefits/calculatorconfiguration/*
 

## Customization

css styles can be done in: `itgloberspartnercl.shipping-thermometer.css`

`In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).`



| CSS Handles |
| ----------- | 
| `thermometer__container` | 
| `free__shipping__text` | 
| `not__free__text` | 
| `image__container` | 
| `thermomether_color` |



<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
