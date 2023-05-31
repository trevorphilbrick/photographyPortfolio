import React from "react";
import { Button, Container, Divider, Grid, Typography, useTheme } from "@mui/material";
import { Instagram } from "@mui/icons-material";

const About = () => {
  const theme = useTheme();
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" fontWeight={300} marginBottom={2}>
        About Me
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Grid container spacing={4}>
        <Grid item xs={12} md={9}>
          <Typography variant="body1" fontWeight={300} marginBottom={4} textAlign={"left"} lineHeight={1.8}>
            {
              "Hey there! I'm Trevor, a passionate photographer based in Salem, Oregon. I have a deep love for car and street photography, as well as a knack for capturing stunning real estate images."
            }
            <br />
            {
              "My lens is drawn to the sleek lines and captivating personalities of cars. I bring vehicles to life through my photography, showcasing their elegance, power, and charm. Whether it's a sports car, an off-road beast, or a classic beauty, I'll make sure it looks breathtaking. "
            }
            <br />

            {
              "When it comes to street photography, I find joy in capturing the raw moments and vibrant energy of urban life. The streets are my canvas, and I aim to tell compelling stories through my lens, highlighting the beauty and diversity of everyday scenes. "
            }
            <br />

            {
              "In addition to that, I also offer exceptional real estate photography services. I understand the importance of captivating imagery in showcasing properties, and I excel at capturing the unique features, ambiance, and architectural details that make each space special. "
            }
            <br />

            {
              "With a perfect blend of technical expertise and artistic vision, I am committed to delivering high-quality photographs that exceed your expectations. Let's collaborate and create visual masterpieces that will leave a lasting impression. Whether you're looking to bring your car to life, capture the essence of the streets, or showcase your property in the best light, I'm here to make it happen. Reach out to me, Trevor, and let's embark on an exciting visual journey together."
            }
            <br />
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight={300} marginBottom={2}>
            Contact
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body1" fontWeight={300} marginBottom={2}>
            Phone:{" "}
            <a href="tel:503-851-2936" style={{ color: theme.palette.text.primary }}>
              503-851-2936
            </a>
          </Typography>
          <Typography variant="body1" fontWeight={300} marginBottom={2}>
            Email:{" "}
            <a href="mailto:tphilbrick.photo@outlook.com" style={{ color: theme.palette.text.primary }}>
              {" "}
              tphilbrick.photo@outlook.com
            </a>
          </Typography>
          <Button variant="outlined" color="success" href="/contact" sx={{ mb: 4 }}>
            Contact Me
          </Button>

          <Typography variant="h6" fontWeight={300} marginBottom={2}>
            Follow Me
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body1" fontWeight={300} marginBottom={2}>
            <a
              href="https://www.instagram.com/trevor.philbrick"
              style={{ color: theme.palette.text.primary }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram sx={{ fontSize: 30 }} />
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
