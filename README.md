# react-components-for-you

## Overview

A [React](https://reactjs.org/) component library showcased with [Storybook](https://storybook.js.org/).

## See the components [here](https://react-components-storybook.netlify.app/)

**This is a WIP** - currently there is just one **Button** component. It has two variants - **primary** and **secondary**. It needs to have children and can have a shape specified (optional). The button variants are also optional. The default button variant is **primary**.

## Installation

- To install the package, run:

```shell
npm install @liene-putnina/react-components-for-you
```

or

```shell
yarn add @liene-putnina/react-components-for-you
```

- After you've installed the **main** package, you need to install the following **peer dependencies:**

```shell
react react-dom
```

## Usage

- Import either the whole library or specific components (see the example below)

```jsx
import { Button } from '@liene-putnina/react-components-for-you';
//or
import * from '@liene-putnina/react-components-for-you'; // adds the whole library
```

- Add them to your code

```tsx
const MyComponent = () => {
  return (
    <Button>{children}<Button/>
  )
};
```

  or

  ```tsx
  const MyComponent = () => {
    return (
      <Button variant={ButtonVariant.DANGER}>{children}<Button/>
    )
  };
  ```

Due to the structure of this library, the css of the components is **not included by default**. In order to get the styling working, add **the following line** to your global style file:

```css
@import '@liene-putnina/react-components-for-you/dist/index.css';
```

## Development

Uses node version > **14.x.x** < **16.x.x**

## License

Licensed under **MIT** License.
