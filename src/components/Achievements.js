import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Dummy achievements data
const achievements = [
  {
    title: 'Robotic Championship',
    description: 'Awarded a prize in India\'s biggest Robotic Championship.',
    image: 'https://via.placeholder.com/150/9C27B0/FFFFFF?text=Achievement',
  },
  {
    title: 'Hackathon Participation',
    description: 'Participated in a 1.5 Day Bootcamp with 24-hours Hackathon and got shortlisted to 2nd Phase.',
    image: 'https://via.placeholder.com/150/FF9800/FFFFFF?text=Hackathon',
  },
  {
    title: 'Hackathon Award',
    description: 'Awarded 3rd prize in 24 hours Hackathon by Smart Bridge in collaboration with IBM.',
    image: 'https://via.placeholder.com/150/3F51B5/FFFFFF?text=Award',
  },
  {
    title: 'Training',
    description: 'Trained juniors and fellow students in programming.',
    image: 'https://via.placeholder.com/150/8BC34A/FFFFFF?text=Training',
  },
];

const Achievements = () => {
  const theme = useTheme();

  return (
    <section id="achievements" style={{ padding: '4rem 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Achievements
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {achievements.map((achievement, index) => (
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
                src={achievement.image}
                alt={achievement.title}
                style={{ width: '100px', height: '100px', borderRadius: '50%' }}
              />
              <Typography variant="h6" color={theme.palette.primary.main}>
                {achievement.title}
              </Typography>
              <Typography variant="body2" color={theme.palette.text.secondary}>
                {achievement.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Achievements;
