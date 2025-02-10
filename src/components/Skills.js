import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { SiPython, SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiGit, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { FaTable } from 'react-icons/fa'; // Importing a table icon from Font Awesome
import { useTheme } from '@mui/material/styles';

// Skills data
const skills = [
  { name: 'Python', icon: <SiPython size={40} /> },
  { name: 'HTML', icon: <SiHtml5 size={40} /> },
  { name: 'CSS', icon: <SiCss3 size={40} /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} /> },
  { name: 'React', icon: <SiReact size={40} /> },
  { name: 'Bootstrap', icon: <SiBootstrap size={40} /> },
  { name: 'Node.js', icon: <SiNodedotjs size={40} /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} /> },
  { name: 'Git', icon: <SiGit size={40} /> },
  { name: 'MS Excel', icon: <FaTable size={40} /> }, // Using FaTable to represent Excel
];

const Skills = () => {
  const theme = useTheme();

  return (
    <section id="skills" style={{ padding: '4rem 0' }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: theme.palette.primary.main,
          
          letterSpacing: "2px",
        }}
      >
        Skills
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
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
              {skill.icon}
              <Typography variant="h6" color={theme.palette.primary.main}>
                {skill.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Skills;
