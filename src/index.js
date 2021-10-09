import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import theme from "./styles/theme";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
