import { Typography } from '@mui/material';
import React from 'react';
import DeleteIcon from "@mui/icons-material/Delete"
import './App.css';
import HotelsContainer from './components/hotelsContainer/HotelsContainer';
import AppContainer from './components/appContainer/AppContainer';

function App() {
  return (
    <AppContainer>
      <DeleteIcon />
      <HotelsContainer>
        <Typography>Hello World!</Typography>
        <Typography>This is Hotels View</Typography>
      </HotelsContainer>
    </AppContainer>
  );
}

export default App;
