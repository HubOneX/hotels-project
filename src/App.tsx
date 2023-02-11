import { Box, Typography } from "@mui/material";
import React from "react";
import HotelsContainer from "./components/hotelsContainer/HotelsContainer";
import AppContainer from "./components/appContainer/AppContainer";

function App() {
  return (
    <AppContainer>
      <Box sx={{ backgroundColor: "red", width: "100%" }}>
        <Typography>This is a Hero</Typography>
      </Box>
      <HotelsContainer>
        <Typography>Hello World!</Typography>
        <Typography>This is Hotels View</Typography>
      </HotelsContainer>
    </AppContainer>
  );
}

export default App;
