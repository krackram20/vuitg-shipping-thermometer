

# SHIPPING THERMOMETER

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

 Componente custom que permite visualizar un termometro, el cual indica cuanto falta para recibir el benefio de envio gratis.
 
 ![targetthermometer](https://user-images.githubusercontent.com/62782975/173135293-6adf7ee7-52fc-4af5-a8ed-b90b6f346690.JPG)




## Configuracion

Para utlizar el componente se debe:

1. Añadir la dependencia `"vuitg.shipping-thermometer": "0.x"` al `manifest.json`;
2. Declarar el bloque `shipping-thermometer` e incluirlo dentro del minicart.

![image](https://user-images.githubusercontent.com/62782975/173134448-9110385b-6e03-4655-9b4e-dfd007806772.png)


### `shipping-thermometer` props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `promotionID`      | `String`       | ID de la promocion de envio gratis        | `XXXXXX`        |

Los IDs de las promociones se pueden obtener de: *{workspace}--{vendor}.myvtex.com/api/rnb/pvt/benefits/calculatorconfiguration/*
 

## Customizacion

La customizacion de los lementos que componen el componente se puede realizar desde el archivo `vuitg.shipping-thermometer.css`

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
