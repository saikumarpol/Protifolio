import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

// Dummy achievements data
const achievements = [
  {
    title: 'Robotic Championship',
    description: 'Awarded a prize in India\'s biggest Robotic Championship.',
    image: 'https://via.placeholder.com/150/9C27B0/FFFFFF?text=Achievement', // Unique image for Achievement
  },
  {
    title: 'Hackathon Participation',
    description: 'Participated in a 1.5 Day Bootcamp with 24-hours Hackathon and got shortlisted to 2nd Phase.',
    image: 'https://via.placeholder.com/150/FF9800/FFFFFF?text=Hackathon', // Unique image for Hackathon
  },
  {
    title: 'Hackathon Award',
    description: 'Awarded 3rd prize in 24 hours Hackathon by Smart Bridge in collaboration with IBM.',
    image: 'https://via.placeholder.com/150/3F51B5/FFFFFF?text=Award', // Unique image for Award
  },
  {
    title: 'Training',
    description: 'Trained juniors and fellow students in programming.',
    image: 'https://via.placeholder.com/150/8BC34A/FFFFFF?text=Training', // Unique image for Training
  },
];

const Achievements = () => {
  return (
    <section id="achievements" style={{ padding: '4rem 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Achievements
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {achievements.map((achievement, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Box textAlign="center" sx={{ padding: '1rem', border: '1px solid #1976d2', borderRadius: '20px', bgcolor: '#e3f2fd', transition: '0.3s', '&:hover': { bgcolor: '#bbdefb' } }}>
              <img src={achievement.image} alt={achievement.title} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
              <Typography variant="h6" color="#1976d2">
                {achievement.title}
              </Typography>
              <Typography variant="body2">{achievement.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Achievements;
