import React from "react";
import { Typography, Box, Grid, Card, CardContent, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { EmojiEvents, Code, MilitaryTech, School } from "@mui/icons-material"; // Icons

const achievements = [
  {
    title: "Robotic Championship",
    description: "Awarded a prize in India's biggest Robotic Championship.",
    
    icon: <EmojiEvents fontSize="large" color="secondary" />, // Trophy Icon
  },
  {
    title: "Hackathon Participation",
    description:
      "Participated in a 1.5-day Bootcamp with a 24-hour Hackathon and got shortlisted to the 2nd Phase.",
    image: "https://via.placeholder.com/150/FF9800/FFFFFF?text=Hackathon",
    icon: <Code fontSize="large" color="primary" />, // Code Icon
  },
  {
    title: "Hackathon Award",
    description:
      "Awarded 3rd prize in a 24-hour Hackathon by Smart Bridge in collaboration with IBM.",
    image: "https://via.placeholder.com/150/3F51B5/FFFFFF?text=Award",
    icon: <MilitaryTech fontSize="large" color="warning" />, // Medal Icon
  },
  {
    title: "Training & Mentorship",
    description: "Trained juniors and fellow students in programming and technical skills.",
    image: "https://via.placeholder.com/150/8BC34A/FFFFFF?text=Training",
    icon: <School fontSize="large" color="success" />, // Education Icon
  },
];

const Achievements = () => {
  const theme = useTheme();

  return (
    <section
      id="achievements"
      style={{
        padding: "4rem 0",
        backgroundColor: theme.palette.background.default,
      }}
    >
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
        Achievements
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {achievements.map((achievement, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "2rem",
                borderRadius: "16px",
                boxShadow: theme.shadows[3],
                textAlign: "center",
                transition: "all 0.3s ease",
                height: "100%",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: theme.shadows[10],
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              {/* Avatar / Image */}
              

              {/* Achievement Icon */}
              <Box mb={1}>{achievement.icon}</Box>

              {/* Card Content */}
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.primary.main,
                    mb: 1,
                  }}
                >
                  {achievement.title}
                </Typography>
                <Typography
                  variant="body2"
                  color={theme.palette.text.secondary}
                  sx={{
                    fontSize: "1rem",
                    lineHeight: "1.5",
                  }}
                >
                  {achievement.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Achievements;
