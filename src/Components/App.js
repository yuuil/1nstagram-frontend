import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import AppRouter from "./Router";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <AppRouter isLoggedIn={!false} />
      </>
    </ThemeProvider>
  );
};

export default App;
