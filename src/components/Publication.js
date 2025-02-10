import React from 'react';
import { Typography, Box, Link, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'; // ✅ Correct import

const publications = [
  {
    title: 'AI Framework for Scalable Automated Continuous Formative Assessment',
    description: [
      'Co-authored a research paper on developing a framework that uses NLP and computer vision tools to automate continuous formative assessments in classrooms.',
      'Published in collaboration with RCTS, IIIT Hyderabad.',
    ],
    link: 'https://ieeexplore.ieee.org/document/10834316',
    image: `${process.env.PUBLIC_URL}/paper.jpg`, // Replace with actual image path
  },
];

const Publication = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // ✅ Works now

  return (
    <section id="publications" style={{ padding: '4rem 1rem' }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: theme.palette.primary.main,
          letterSpacing: '2px',
          fontSize: isSmallScreen ? '2rem' : '2.5rem',
        }}
      >
        Publications
      </Typography>

      {publications.map((publication, index) => (
        <Box
          key={index}
          sx={{
            borderRadius: '16px',
            bgcolor: theme.palette.background.paper,
            boxShadow: theme.shadows[3],
            border: `1px solid ${theme.palette.divider}`,
            transition: '0.3s ease',
            marginBottom: '2rem',
            padding: '2rem',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: theme.shadows[6],
              borderColor: theme.palette.primary.main,
            },
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={5}>
              <Box
                component="img"
                src={publication.image}
                alt={publication.title}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  objectFit: 'cover',
                  boxShadow: theme.shadows[1],
                }}
              />
            </Grid>

            <Grid item xs={12} sm={7}>
              <Typography variant="h6" color={theme.palette.primary.main} gutterBottom>
                {publication.title}
              </Typography>

              <ul style={{ paddingLeft: '1.2rem', marginTop: '1rem', color: theme.palette.text.secondary }}>
                {publication.description.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'block',
                  color: theme.palette.primary.main,
                  textDecoration: 'none',
                  marginTop: '1rem',
                  fontWeight: 'bold',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Read the full paper
              </Link>
            </Grid>
          </Grid>
        </Box>
      ))}
    </section>
  );
};

export default Publication;
