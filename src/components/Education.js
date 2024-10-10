import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

// Dummy education data
const educationData = [
  {
    institution: 'Kakinada Institute of Engineering and Technology, A.P',
    degree: 'Bachelor of Technology in Computer Science',
    year: '2018-2022',
    cgpa: 'CGPA: 7.4',
    image: 'https://via.placeholder.com/150/2196F3/FFFFFF?text=Education', // Unique image for Education
  },
  {
    institution: 'Narayana Junior College, Visakhapatnam',
    degree: 'Intermediate, MPC',
    year: '2016-2018',
    cgpa: '88.8%',
    image: 'https://via.placeholder.com/150/FF5722/FFFFFF?text=Junior+College', // Unique image for Junior College
  },
  {
    institution: 'Sri Chaitanya Techno School, Kakinada',
    degree: 'SSC',
    year: '2015-2016',
    cgpa: 'CGPA: 7.3',
    image: 'https://via.placeholder.com/150/FFEB3B/FFFFFF?text=School', // Unique image for School
  },
];

const Education = () => {
  return (
    <section id="education" style={{ padding: '4rem 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Education
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {educationData.map((edu, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Box textAlign="center" sx={{ padding: '1rem', border: '1px solid #1976d2', borderRadius: '20px', bgcolor: '#e3f2fd', transition: '0.3s', '&:hover': { bgcolor: '#bbdefb' } }}>
              <img src={edu.image} alt={edu.institution} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
              <Typography variant="h6" color="#1976d2">
                {edu.degree}
              </Typography>
              <Typography variant="subtitle1" color="#555">
                {edu.institution} - {edu.year}
              </Typography>
              <Typography variant="body2">{edu.cgpa}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Education;
