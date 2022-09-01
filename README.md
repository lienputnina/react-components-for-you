# react-components-for-you

## Overview

This is a [React](https://reactjs.org/) component library based on [Storybook](https://storybook.js.org/). The components can be viewed [here](https://62e14216056cc0228f7a7c55--storybook-react-components.netlify.app/?path=/story/button--primary).

Currently there is just one `Button` component. It has two variants - `primary` and `secondary`. It needs to have children and can have a shape specified (optional). The button variants are also optional. The default button variant is `primary`.

## Installation

* To install the package, run:

```shell
npm install @liene-putnina/react-components-for-you
```

or

```shell
yarn add @liene-putnina/react-components-for-you
```

* After you've installed the `main` package, you need to install the following `peer dependencies:`

```shell
react react-dom
```

## Usage

* Import either the whole library or specific components (see the example below)

```jsx
import { Button } from '@liene-putnina/react-components-for-you';
//or

import * from '@liene-putnina/react-components-for-you'; // adds the whole library
```

* Add them to your code (see the examples below)

```jsx
const MyComponent = () => {
return(
    <Button >{children}<Button/>
)
};
```

or

```jsx
const MyComponent = () => {
return(
    <Button variant = {ButtonVariant.DANGER}>{children}<Button/>
)
};
```

Due to the structure of this library, the css of the components is `not added by default`. In order to get that working, add `the following line` to your global style file:

```jsx
@import '../../node_modules/@liene-putnina/react-components-for-you/dist/index.css';

```

## Development

Uses node version > **14.x.x** < **16.x.x**

## License

Licensed under **MIT** License.
