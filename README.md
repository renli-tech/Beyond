![GitHub](https://img.shields.io/github/license/renli-tech/Beyond?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/renli-tech/Beyond?style=flat-square)

<img src="./logo/light.png" alt="beyond-logo"/>
<!-- <img src="./logo/dark.png" alt="beyond-logo"/> -->

<h1 align="center">Beyond Design System</h1>
<p align="center">
A design system for Renli</p>

## Packages

| packages  
| --------------------------------------------------
| [@beyond-ui/shared](./packages/shared)  
| [@beyond-ui/react](./packages/react)  
| [@beyond-ui/react-native](./packages/react-native)
| [@beyond-ui/theme](./packages/theme)  
| [@beyond-ui/system](./packages/system)

<br/>

## ✌ Usage

<br/>

#### Create React App

<br/>

To use Beyond UI Library in React, all you need to do is install the
`@beyond-ui/react` package:

```sh
$ yarn add @beyond-ui/react

# or

$ npm i @beyond-ui/react
```

2. Now you can start importing components:

```jsx
import { Button } from "@beyond-ui/react";

function App() {
  return (
        <Button>
            Hello,Welcome to Beyond Ui
        <Button>
      )
};

```

3. You can also define your own Theme:

```jsx
import { ThemeProvider, Button } from "@beyond-ui/react";

function App() {
  return (
        <ThemeProvider theme={{
            color : {
                myCustomColor : "#0d0d0d"
            }
        }}>
            <Button bgcolor="myCustomColor">
            This Button is using a custom theme color
            </Button>
        <ThemeProvider>
      )
};
```

<br/>

#### React-Native

<br/>

😎 Support for React-Native is Coming Soon...

<br/>

## Contributing

Feel like contributing? That's awesome! We have a
[contributing guide](./CONTRIBUTING.md) to help guide you.

## License

[License MIT](./LICENSE) © [Renli](https://github.com/renli-tech)
