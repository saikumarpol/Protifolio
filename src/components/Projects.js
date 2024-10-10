import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

// Dummy projects data
const projects = [
  {
    title: 'Student Club Dashboard',
    description: 'A student management system where students, faculty, and core team can explore projects, discuss topics, manage profiles, join, collaborate, and contribute to the student community.',
    role: 'Developer',
    technologies: 'React.js, Node.js, Express, MongoDB',
    image: 'https://via.placeholder.com/300x200?text=Student+Club+Dashboard',
  },
  {
    title: 'Safe Zone',
    description: 'An application to find nearby hospitals with available beds and oxygen, making the process easier for those in need.',
    role: 'Team Lead',
    technologies: 'HTML, CSS, Django',
    image: 'https://via.placeholder.com/300x200?text=Safe+Zone',
  },
  {
    title: 'Badal - Crowdsourcing Developers for Social Cause',
    description: 'A platform for NGOs to post their "Problem Statements" and receive tech solutions from corporates and entities participating in CSR activities.',
    role: 'Developer Engineer',
    technologies: 'MERN Stack, ELK Stack, Gitlab',
    image: 'https://via.placeholder.com/300x200?text=Badal',
  },
  {
    title: 'SELSCA (System for Effective Learning and School Complex Administration)',
    description: 'A platform for school administration and student data management being developed for Telangana Government Schools.',
    role: 'Developer Engineer',
    technologies: 'MERN Stack',
    image: 'https://via.placeholder.com/300x200?text=SELSCA',
  },
  {
    title: 'Activeness Grading Tool (TA-Bot)',
    description: 'A tool that helps teachers analyze student performance and activeness in the classroom, developed at RCTS in IIIT-H.',
    role: 'Developer Engineer',
    technologies: 'NLP, Farm Stack',
    image: 'https://via.placeholder.com/300x200?text=TA-Bot',
  },
];

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '4rem 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ transition: '0.3s', '&:hover': { boxShadow: 10 }, borderRadius: '8px', bgcolor: '#ffffff' }}>
              <img
                src={project.image}
                alt={project.title}
                style={{ borderRadius: '8px 8px 0 0', width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" color="#1976d2">
                  <CodeIcon sx={{ verticalAlign: 'middle', marginRight: '8px' }} />
                  {project.title}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Role: {project.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Technologies: {project.technologies}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Projects;
