import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Switch } from '@mui/material';
import { useTheme } from '../ThemeContext'; // Ensure this path is correct

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <AppBar position="sticky" sx={{ background: 'linear-gradient(90deg, #1976d2, #1e88e5)' }}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Saikumar Pola
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" href="https://github.com/your-github-username" target="_blank">
            GitHub
          </Button>
          <Button color="inherit" href="https://linkedin.com/in/your-linkedin-username" target="_blank">
            LinkedIn
          </Button>
          <Typography sx={{ marginLeft: 2, color: 'white' }}>
            {darkMode ? 'Dark Mode' : 'Light Mode'}
          </Typography>
          <Switch 
            checked={darkMode} 
            onChange={toggleTheme} 
            color="default" // You can change the color as needed
            sx={{ marginLeft: 1 }} 
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
