import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing GitHub and LinkedIn icons

const ProfileSummary = () => {
  return (
    <Box
      sx={{
        padding: '4rem 2rem',
        textAlign: 'center',
        bgcolor: 'background.paper',
        borderRadius: '8px',
        boxShadow: 3,
        border: '1px solid #1976d2',
        marginBottom: '2rem', // Adding some space below the box
      }}
    >
      <img
        // src={`${process.env.PUBLIC_URL}/profile.jpg`} // Updated path to the public folder
        alt="Profile"
        style={{
          borderRadius: '50%',
          width: '150px',
          height: '150px',
          marginBottom: '20px',
        }}
      />
      <Typography variant="h3" gutterBottom sx={{ color: '#1976d2' }}>
        Saikumar Pola
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        React Frontend Developer | Django Backend Developer
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Currently in my final year of B.Tech. I have a strong foundation in React frontend development and Django backend development.
      </Typography>

      {/* Social Media Links with Icons */}
      <Box sx={{ marginTop: '20px' }}>
        <Button
          variant="outlined"
          color="primary"
          href="https://github.com/your-github-username"
          target="_blank"
          startIcon={<FaGithub />} // Adding GitHub icon
          sx={{ margin: '0 10px' }} // Adding margin between buttons
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href="https://linkedin.com/in/your-linkedin-username"
          target="_blank"
          startIcon={<FaLinkedin />} // Adding LinkedIn icon
          sx={{ margin: '0 10px' }} // Adding margin between buttons
        >
          LinkedIn
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileSummary;
