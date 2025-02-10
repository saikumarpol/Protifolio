import React from "react";
import { Typography, Box, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

const educationData = [
  {
    institution: "Kakinada Institute of Engineering and Technology, A.P",
    degree: "Bachelor of Technology in Computer Science",
    year: "2018-2022",
    cgpa: "CGPA: 7.4",
    icon: <LocalLibraryIcon fontSize="large" />,
  },
  {
    institution: "Narayana Junior College, Visakhapatnam",
    degree: "Intermediate, MPC",
    year: "2016-2018",
    cgpa: "88.8%",
    icon: <AccountBalanceIcon fontSize="large" />,
  },
  {
    institution: "Sri Chaitanya Techno School, Kakinada",
    degree: "SSC",
    year: "2015-2016",
    cgpa: "CGPA: 7.3",
    icon: <SchoolIcon fontSize="large" />,
  },
];

const Education = () => {
  const theme = useTheme();
  return (
    <section id="education" style={{ padding: "4rem 0", backgroundColor: theme.palette.background.default }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: "bold", color: theme.palette.primary.main }}>
        Education
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {educationData.map((edu, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "2rem",
                borderRadius: "16px",
                bgcolor: theme.palette.background.paper,
                boxShadow: theme.shadows[3],
                border: `1px solid ${theme.palette.divider}`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                height: "100%",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: theme.shadows[6],
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: theme.palette.primary.light,
                  color: theme.palette.primary.main,
                  borderRadius: "50%",
                  marginBottom: "1rem",
                }}
              >
                {edu.icon}
              </Box>

              {/* Degree */}
              <Typography variant="h5" sx={{ fontWeight: "bold", color: theme.palette.primary.main, mb: 1 }}>
                {edu.degree}
              </Typography>

              {/* Institution */}
              <Typography variant="subtitle1" color={theme.palette.text.secondary} sx={{ mb: 1 }}>
                {edu.institution}
              </Typography>

              {/* Year */}
              <Typography variant="body2" color={theme.palette.text.disabled} sx={{ mb: 2 }}>
                {edu.year}
              </Typography>

              {/* CGPA (Fixed Alignment) */}
              <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 2 }}>
                <SchoolIcon fontSize="small" sx={{ color: theme.palette.primary.main, mr: 1 }} />
                <Typography variant="body1" sx={{ fontWeight: "bold", color: theme.palette.text.secondary }}>
                  {edu.cgpa}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Education;
