import { useContext } from "react";
import { Box, Container, Grid, useTheme } from "@mui/material";
import { AppStateContext } from "../../App";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const theme = useTheme();
  const textPrimaryColor = { color: theme.palette.text.primary };
  const { appState } = useContext(AppStateContext);
  return (
    <Box
      sx={{
        mt: 6,
        pt: 4,
        pb: 4,
        fontSize: "0.9rem",
        backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[900] : theme.palette.grey[100]
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <ul style={{ listStyleType: "none", textAlign: "left" }}>
              <li>
                <Link to={"/"} style={textPrimaryColor}>
                  Home{" "}
                </Link>
              </li>
              <li>Galleries:</li>
              <ul style={{ listStyleType: "none", textAlign: "left" }}>
                {appState.galleries &&
                  appState.galleries.map(gallery => (
                    <li key={gallery.name}>
                      <Link to={`/gallery/${gallery.name}`} style={textPrimaryColor}>
                        {gallery.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ul style={{ listStyleType: "none", textAlign: "left" }}>
              <li>
                <Link to={"/contact"} style={textPrimaryColor}>
                  Contact
                </Link>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+12159394137" style={textPrimaryColor}>
                  215-939-4137
                </a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:tphilbrick.photo@outlook.com" style={textPrimaryColor}>
                  tphilbrick.photo@outlook.com
                </a>{" "}
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-around", px: 8, maxWidth: 300 }}>
              <InstagramIcon onClick={() => (window.location = "https://www.instagram.com/trevor.philbrick")} />
              <GitHubIcon onClick={() => (window.location = "https://github.com/trevorphilbrick")} />
              <LinkedInIcon onClick={() => (window.location = "https://www.linkedin.com/in/trevor-philbrick/")} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
