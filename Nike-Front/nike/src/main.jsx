import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          _checked: {
            bg: "#000000",
            borderColor: "#000000",
            color: "#ffffff",
          },
          _hover: {
            _checked: {
              bg: "#000000",
              borderColor: "#000000",
            },
            _notChecked: {
              bg: "#000000",
              borderColor: "#000000",
            },
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
