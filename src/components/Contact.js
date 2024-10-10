import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic
  };

  return (
    <section id="contact" style={{ padding: '4rem 0' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '600px', margin: '0 auto' }}>
        <TextField fullWidth margin="normal" label="Name" variant="outlined" required />
        <TextField fullWidth margin="normal" label="Email" variant="outlined" required type="email" />
        <TextField fullWidth margin="normal" label="Message" variant="outlined" required multiline rows={4} />
        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </Box>
    </section>
  );
};

export default Contact;
