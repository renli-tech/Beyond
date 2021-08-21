import { Button, ThemeProvider, Form, TextInput, FlexBox } from "@beyond-ui/react";

function App() {

  const theme = {
    colors : {
      myRed : "#d22"
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <FlexBox alignItems="center" justifyContent="space-around" flexDirection="row"> 
      <Form>
          <TextInput placeholder="Firstname" type="text" marginRight="20px"/>
          <TextInput placeholder="Lastname" type="password"/>
          <Button backgroundColor="blue" rounded="full">Hello</Button>
      </Form>
      </FlexBox>

    </ThemeProvider>
  );
}

export default App;
