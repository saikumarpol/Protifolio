import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

// Dummy work experience data
const workExperiences = [
  {
    title: 'Software Development Engineer',
    company: 'Raj Reddy Center for Technology and Society',
    date: 'Oct 2022 - Present',
    description: [
      'Implemented a few websites from scratch and improved existing features.',
      'Designed SELSCA, a platform for Telangana Government Schools.',
      'Developed the Badal project, crowdsourcing developers for social causes.',
    ],
    image: 'https://via.placeholder.com/150/4CAF50/FFFFFF?text=Work', // Unique image for Work Experience
  },
  {
    title: 'Software Intern',
    company: 'Wipro (TURBO – Velocity Programme)',
    date: 'Apr 2022 - Jun 2022',
    description: [
      'Learned Angular and cloud technologies (Google Cloud Platform).',
      'Developed a project using Spring Boot, Angular, and Cloud.',
    ],
    image: 'https://via.placeholder.com/150/FF9800/FFFFFF?text=Wipro', // Unique image for Wipro
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience" style={{ padding: '4rem 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Work Experience
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {workExperiences.map((experience, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Box textAlign="center" sx={{ padding: '1rem', border: '1px solid #1976d2', borderRadius: '20px', bgcolor: '#e3f2fd', transition: '0.3s', '&:hover': { bgcolor: '#bbdefb' } }}>
              <img src={experience.image} alt={experience.company} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
              <Typography variant="h6" color="#1976d2">
                {experience.title}
              </Typography>
              <Typography variant="subtitle1" color="#555">
                {experience.company} - {experience.date}
              </Typography>
              <Typography variant="body2">{experience.description.join(' | ')}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default WorkExperience;
