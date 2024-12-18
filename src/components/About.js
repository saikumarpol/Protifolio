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
          A tech enthusiast with a strong foundation in Data Structures and Algorithms. Experienced in developing and debugging code with the ability to quickly learn and master new technologies. Proficient in understanding and translating business requirements into technical solutions. Adept at implementing CI/CD pipelines and deploying scalable applications.

          </Typography>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;
