import React from "react";
import {
  Container,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { MdDarkMode, MdLightMode } from "react-icons/md"; // Importing Dark/Light mode icons
import ProfileSummary from "./components/ ProfileSummary";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Publication from "./components/Publication";
import { ThemeProvider, useTheme } from "./ThemeContext";

function App() {
  const { darkMode, toggleTheme } = useTheme();

  // Create theme based on darkMode state
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#f5f5f5",
      },
      text: {
        primary: darkMode ? "#ffffff" : "#000000",
        secondary: darkMode ? "#bbbbbb" : "#666666",
      },
    },
    typography: {
      h4: {
        color: darkMode ? "#ffffff" : "#000000",
      },
      body1: {
        color: darkMode ? "#bbbbbb" : "#000000",
      },
      body2: {
        color: darkMode ? "#888888" : "#333333",
      },
    },
    transitions: {
      duration: {
        standard: 300,
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "1rem",
        }}
      >
        <Typography variant="body1" sx={{ marginRight: "8px" }}>
          {darkMode ? "Dark Mode" : "Light Mode"}
        </Typography>
        <IconButton onClick={toggleTheme} color="primary">
          {darkMode ? <MdDarkMode size={28} /> : <MdLightMode size={28} />}
        </IconButton>
      </Box>

      <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
        <ProfileSummary />
        <WorkExperience />
        <Projects />
        <Education />
        <Skills />
        <Achievements />
        <Publication />
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
