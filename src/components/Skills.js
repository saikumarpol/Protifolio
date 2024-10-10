import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { SiPython, SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiDjango, SiMysql, SiGit, SiMicrosoftexcel } from 'react-icons/si';

// Remove SiJava and replace it with a more generic or related icon
const skills = [
  { name: 'Python', icon: <SiPython size={40} /> },
  { name: 'Java (Placeholder)', icon: <SiJavascript size={40} /> }, // Using Javascript icon as a placeholder
  { name: 'HTML', icon: <SiHtml5 size={40} /> },
  { name: 'CSS', icon: <SiCss3 size={40} /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} /> },
  { name: 'React', icon: <SiReact size={40} /> },
  { name: 'Bootstrap', icon: <SiBootstrap size={40} /> },
  { name: 'Django', icon: <SiDjango size={40} /> },
  { name: 'SQL', icon: <SiMysql size={40} /> },
  { name: 'Git', icon: <SiGit size={40} /> },
  { name: 'MS Excel', icon: <SiMicrosoftexcel size={40} /> },
];

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '4rem 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index} xs={6} sm={4} md={3}>
            <Box textAlign="center" sx={{ padding: '1rem', border: '1px solid #1976d2', borderRadius: '20px', bgcolor: '#e3f2fd', transition: '0.3s', '&:hover': { bgcolor: '#bbdefb' } }}>
              <Typography variant="h6" color="#1976d2">
                {skill.icon}
              </Typography>
              <Typography variant="body1">{skill.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Skills;
