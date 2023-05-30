import { useState } from "react";
import { Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const GalleryGridItem = ({ gallery }) => {
  const [hover, setHover] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{ position: "relative", margin: 0, padding: 0 }}
      onClick={() => navigate(`/gallery/${gallery.name}`)}
    >
      <motion.div
        style={{ width: "100%", height: "100%" }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: isLoaded + 1 }}
        initial={{ opacity: 0 }}
      >
        <img
          src={gallery.imageUrl}
          alt={gallery.title}
          width={"100%"}
          height={"100%"}
          onLoad={() => setIsLoaded(true)}
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
            opacity: isSmall ? 1 : hover ? 1 : 0
          }}
        >
          <Typography variant="h5" fontWeight={300}>
            {gallery.title}
          </Typography>
        </div>
      </motion.div>
    </Grid>
  );
};

export default GalleryGridItem;
