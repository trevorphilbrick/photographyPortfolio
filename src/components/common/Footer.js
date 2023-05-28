import React from "react";
import { Box, Typography, Container, Grid, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ mt: 6, backgroundColor: theme.palette.primary.main }}>
      <Container>
        <Grid container>
          <Grid item sm={12} md={4}>
            <Typography variant="p">Navigation</Typography>
          </Grid>
          <Grid item sm={12} md={4}>
            <Typography variant="p">Contact</Typography>
          </Grid>
          <Grid item sm={12} md={4}>
            <Typography variant="p">Social</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
