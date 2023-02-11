import { Box, Typography } from "@mui/material";
import React from "react";
import AppContainer from "./components/appContainer/AppContainer";
import HotelsView from "./components/hotelsView/HotelsView";
import { ThemeProvider } from "@mui/material/styles";
import lightTheme from "./themes/lightTheme";
import { hotelsMockArray } from "./mocks/hotelsMockArray";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppContainer>
        <Box sx={{ backgroundColor: "red", width: "100%" }}>
          <Typography>This is a Hero</Typography>
        </Box>
        <HotelsView hotelsData={hotelsMockArray} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
