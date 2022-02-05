import React from "react";
import Routes from "./src/routes/index";

import { darkTheme, lightTheme } from "./src/styles/themes";

import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
