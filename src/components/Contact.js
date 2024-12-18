import React from 'react';
import { Typography, Box, Link, Button } from '@mui/material';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '4rem 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Details
      </Typography>
      <Box sx={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Email: <Link href="mailto:saikumarpol4@gmail.com" color="primary">saikumarpol4@gmail.com</Link>
        </Typography>
        <Typography variant="h6" gutterBottom>
          Phone: <Link href="tel:+917287013867" color="primary">7287013867</Link>
        </Typography>
        <Typography variant="h6" gutterBottom>
          Follow me on:
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" color="primary" startIcon={<FaTwitter />}>
              Twitter
            </Button>
          </Link>
          <Link href="https://www.instagram.com/your-insta" target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" color="primary" startIcon={<FaInstagram />}>
              Instagram
            </Button>
          </Link>
          <Link href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" color="primary" startIcon={<FaGithub />}>
              GitHub
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" color="primary" startIcon={<FaLinkedin />}>
              LinkedIn
            </Button>
          </Link>
        </Box>
      </Box>
    </section>
  );
};

export default Contact;
