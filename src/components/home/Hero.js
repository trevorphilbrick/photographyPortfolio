import { Divider, Typography, useTheme } from "@mui/material";
import React from "react";
import heroImageDark from "../../img/heroImageDarkBackdrop.jpg";
import heroImage from "../../img/heroImageBackdrop.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundImage: `url(${theme.palette.mode === "dark" ? heroImageDark : heroImage})`,
        width: "100vw",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "sticky"
      }}
    >
      <div style={{ color: "#fff" }}>
        <motion.div animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} initial={{ opacity: 0 }}>
          <Typography variant="h2" letterSpacing={"4px"}>
            Trevor Philbrick
          </Typography>
        </motion.div>
        <motion.div
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
          initial={{ width: "0%" }}
        >
          <Divider sx={{ backgroundColor: "#fff" }} />
        </motion.div>
        <motion.div animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} initial={{ opacity: 0 }}>
          <Typography variant="h3" letterSpacing={"4px"} fontWeight={300}>
            Photography
          </Typography>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, rotate: 720 }}
          transition={{ duration: 1, delay: 2.2 }}
          initial={{ opacity: 0 }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#fff",
              transform: "rotate(45deg)",
              margin: "16px auto"
            }}
          ></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
