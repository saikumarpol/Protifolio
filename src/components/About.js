import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const About = () => {
  return (
    <section id="about" style={{ padding: '2rem 0', backgroundColor: '#fff' }}>
      <Card sx={{ maxWidth: 600, margin: '2rem auto', boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            About Me
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A tech enthusiast with a strong foundation in Data Structures and Algorithms. I am passionate about coding and eager to learn new technologies quickly.
          </Typography>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;
