import { useState } from "react";
import { Grid, Typography } from "@mui/material";

const GalleryGridItem = ({ gallery }) => {
  const [hover, setHover] = useState(false);
  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      sx={{ position: "relative", margin: 0, padding: 0 }}
    >
      <img
        src={gallery.imageUrl}
        alt={gallery.title}
        width={"100%"}
        height={"100%"}
      />

      <div
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "brightness(0.5) blur(1px)",
          color: "#fff",
          opacity: hover ? 1 : 0,
        }}
      >
        <Typography variant="h5" fontWeight={300}>
          {gallery.title}
        </Typography>
      </div>
    </Grid>
  );
};

export default GalleryGridItem;
