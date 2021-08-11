![GitHub](https://img.shields.io/github/license/renli-tech/Beyond?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/renli-tech/Beyond?style=flat-square)

<h1 align="center">Beyond Design System</h1>
<p align="center">
A design system for Renli</p>

<br/>

## Packages

| package  | version     
|-------------- |  -------------- |
| [@beyond/shared](https://github.com/renli-tech/Beyond/tree/master/packages/shared)    | 0.0.0    
| [@beyond/react](https://github.com/renli-tech/Beyond/tree/master/packages/react)    | 0.0.0    
| [@beyond/react-native](https://github.com/renli-tech/Beyond/tree/master/packages/react-native)    | 0.0.0    
| [@beyond/theme](https://github.com/renli-tech/Beyond/tree/master/packages/theme)    | 0.0.0    
| [@beyond/system](https://github.com/renli-tech/Beyond/tree/master/packages/system)    | 0.0.0    

<br/>

## Usage

<br/>

#### Create React App

<br/>

To use Beyond UI Library in React, all you need to do is install the
`@beyond/react` package:

```sh
$ yarn add @beyond/react

# or

$ npm i @chakra-ui/react
```

2. Now you can start importing components:

```jsx
import { Button } from "@beyond/react";

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
import { ThemeProvider } from "@beyond/react";

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

Support for React-Native is Coming Soon...


<br/>

## Contributing

Feel like contributing? That's awesome! We have a
[contributing guide](./CONTRIBUTING.md) to help guide you.

## License

[License MIT](https://github.com/renli-tech/Beyond/blob/master/LICENSE) © [Renli](https://github.com/renli-tech)
