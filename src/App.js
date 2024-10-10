import React from 'react';
import { Container, CssBaseline, ThemeProvider as MuiThemeProvider, createTheme, Switch, Box, Typography } from '@mui/material';
import ProfileSummary from './components/ ProfileSummary';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { ThemeProvider, useTheme } from './ThemeContext'; // Ensure this path is correct

function App() {
  const { darkMode, toggleTheme } = useTheme();

  // Create theme based on darkMode state
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '1rem' }}>
        <Typography variant="body1" sx={{ marginRight: '8px' }}>
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </Typography>
        <Switch 
          checked={darkMode} 
          onChange={toggleTheme} 
          color="default" // You can change the color as needed
        />
      </Box>
      <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
        <ProfileSummary />
        <WorkExperience />
        <Projects />
        <Education />
        <Skills />
        <Achievements />
        <Contact />
      </Container>
    </MuiThemeProvider>
  );
}

// Wrap your App component in ThemeProvider
const AppWrapper = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWrapper;
