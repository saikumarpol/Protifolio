import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Dummy education data
const educationData = [
  {
    institution: 'Kakinada Institute of Engineering and Technology, A.P',
    degree: 'Bachelor of Technology in Computer Science',
    year: '2018-2022',
    cgpa: 'CGPA: 7.4',
    image: 'https://via.placeholder.com/150/2196F3/FFFFFF?text=Education',
  },
  {
    institution: 'Narayana Junior College, Visakhapatnam',
    degree: 'Intermediate, MPC',
    year: '2016-2018',
    cgpa: '88.8%',
    image: 'https://via.placeholder.com/150/FF5722/FFFFFF?text=Junior+College',
  },
  {
    institution: 'Sri Chaitanya Techno School, Kakinada',
    degree: 'SSC',
    year: '2015-2016',
    cgpa: 'CGPA: 7.3',
    image: 'https://via.placeholder.com/150/FFEB3B/FFFFFF?text=School',
  },
];

const Education = () => {
  const theme = useTheme();

  return (
    <section id="education" style={{ padding: '4rem 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Education
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {educationData.map((edu, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Box
              textAlign="center"
              sx={{
                padding: '1rem',
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: '20px',
                bgcolor: theme.palette.background.default,
                transition: '0.3s',
                '&:hover': { bgcolor: theme.palette.action.hover },
              }}
            >
              <img
                src={edu.image}
                alt={edu.institution}
                style={{ width: '100px', height: '100px', borderRadius: '50%' }}
              />
              <Typography variant="h6" color={theme.palette.primary.main}>
                {edu.degree}
              </Typography>
              <Typography variant="subtitle1" color={theme.palette.text.secondary}>
                {edu.institution} - {edu.year}
              </Typography>
              <Typography variant="body2" color={theme.palette.text.secondary}>
                {edu.cgpa}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Education;
