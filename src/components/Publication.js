import React from 'react';
import { Typography, Box,  Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const publications = [
  {
    title: 'AI Framework for Scalable Automated Continuous Formative Assessment',
    description: [
      'Co-authored a research paper on developing a framework that uses NLP and computer vision tools to automate continuous formative assessments in classrooms.',
      'Published in collaboration with RCTS, IIIT Hyderabad.',
    ],
    link: 'https://your-research-paper-link.com', // Replace with your actual paper link
   image: `${process.env.PUBLIC_URL}/paper.jpg`
  },
];

const Publication = () => {
  const theme = useTheme();

  return (
    <section id="publications" style={{ padding: '4rem 2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Publications
      </Typography>
      {publications.map((publication, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            padding: '2rem',
            borderRadius: '16px',
            bgcolor: theme.palette.background.paper,
            boxShadow: theme.shadows[3],
            border: `1px solid ${theme.palette.divider}`,
            transition: '0.3s ease',
            marginBottom: '2rem',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: theme.shadows[6],
              borderColor: theme.palette.primary.main,
            },
          }}
        >
          {/* Left side: Image */}
          <Box
            component="img"
            src={publication.image} // Use relative path here
            alt={publication.title}
            sx={{
              width: '50%',
              height: 'auto',
              borderRadius: '10px',
              objectFit: 'cover',
              boxShadow: theme.shadows[1],
            }}
          />

          {/* Right side: Description */}
          <Box
            sx={{
              paddingLeft: '2rem',
              width: '50%',
            }}
          >
            <Typography variant="h6" color={theme.palette.primary.main} gutterBottom>
              {publication.title}
            </Typography>

            {/* Description of the publication */}
            <ul style={{ paddingLeft: '1.2rem', marginTop: '1rem', color: theme.palette.text.secondary }}>
              {publication.description.map((item, i) => (
                <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  {item}
                </li>
              ))}
            </ul>

            {/* Link to read the full paper */}
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
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Read the full paper
            </Link>
          </Box>
        </Box>
      ))}
    </section>
  );
};

export default Publication;
