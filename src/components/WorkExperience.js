import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const workExperiences = [
  {
    title: 'Software Development Engineer',
    company: 'Raj Reddy Center for Technology and Society',
    date: 'Oct 2022 - Present',
    description: [
      'Implemented several websites from scratch and enhanced existing features.',
      'Designed and developed SELSCA for Telangana Government Schools.',
      'Contributed to the Badal platform for NGO collaboration.',
      'Technologies: MERN Stack, ELK Stack, GitLab, NLP, FARM Stack.',
    ],
    image: 'https://via.placeholder.com/150/4CAF50/FFFFFF?text=RCTS',
  },
  {
    title: 'Software Intern',
    company: 'Wipro (TURBO – Velocity Programme)',
    date: 'Apr 2022 - Jun 2022',
    description: [
      'Developed an online vegetable marketplace with AngularJS and Spring Boot.',
      'Deployed the application on Google Cloud Platform (GCP).',
    ],
    image: 'https://via.placeholder.com/150/FF9800/FFFFFF?text=Wipro',
  },
];

const WorkExperience = () => {
  const theme = useTheme();

  return (
    <section id="work-experience" style={{ padding: '4rem 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Work Experience
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {workExperiences.map((experience, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Box
              sx={{
                padding: '2rem',
                borderRadius: '16px',
                bgcolor: theme.palette.background.paper,
                boxShadow: theme.shadows[3],
                border: `1px solid ${theme.palette.divider}`, // Added border
                transition: '0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: theme.shadows[6],
                  borderColor: theme.palette.primary.main, // Border changes on hover
                },
              }}
            >
              <Box
                component="img"
                src={experience.image}
                alt={experience.company}
                sx={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'block',
                  border: `2px solid ${theme.palette.primary.main}`, // Added border around the image
                }}
              />
              <Typography variant="h6" color={theme.palette.primary.main} gutterBottom>
                {experience.title}
              </Typography>
              <Typography variant="subtitle2" color={theme.palette.text.secondary}>
                {experience.company}
              </Typography>
              <Typography variant="body2" color={theme.palette.text.disabled} gutterBottom>
                {experience.date}
              </Typography>
              <ul style={{ paddingLeft: '1.2rem', marginTop: '1rem', color: theme.palette.text.secondary }}>
                {experience.description.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default WorkExperience;
