<h1 align="center">Beyond React Component Library</h1>
<p align="center">
A React Component Library from the Beyond design system</p>

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

## License

[License MIT](../../LICENSE) © [Renli](https://github.com/renli-tech)
