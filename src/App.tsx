import { Box, Typography } from "@mui/material";
import React from "react";
import AppContainer from "./components/appContainer/AppContainer";
import HotelsView from "./components/hotelsView/HotelsView";
import { ThemeProvider } from "@mui/material/styles";
import lightTheme from "./themes/lightTheme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppContainer>
        <Box sx={{ backgroundColor: "red", width: "100%" }}>
          <Typography>This is a Hero</Typography>
        </Box>
        {/* <HotelsContainer>
        <Typography>Hello World!</Typography>
        <Typography>This is Hotels View</Typography>
      </HotelsContainer> */}
        <HotelsView />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
