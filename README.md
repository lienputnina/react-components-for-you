# storybook-components-foryou

## Overview

This is a [React](https://reactjs.org/) component library based on [Storybook](https://storybook.js.org/). The components can be viewed [here](<https://62e14216056cc0228f7a7c55--storybook-react-components.netlify.app/?path=/story/button--primary>).

Currently there is just one **Button** component. It has two variants - `primary` and `secondary`. It needs to have children and can have a shape specified (optional).

## Installation

To install the package, run:

```shell
npm install -D @liene-putnina/storybook-components-foryou
```

or

```shell
yarn add -D @liene-putnina/storybook-components-foryou
```

After you've installed the **main** package, you need to install the following **peer dependencies:**

```shell
react react-dom 
```

## Usage

* Import either the whole library or specific components
* Add them to your code (see the example below)

```jsx

import { Button } from '@liene-putnina/storybook-components-foryou';
//or  
import * from '@liene-putnina/storybook-components-foryou'; // adds the whole library

const MyComponent = () => {
    //some functions here
return (
    <Button variant="primary | secondary" shape="rounded">{children}<Button/>
)
};
```

## License

Licensed under **MIT** License.
