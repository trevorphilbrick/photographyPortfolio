import React from "react";
import ToggleTheme from "./ToggleTheme";
import { Box, Link } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      animate={{ opacity: 1, width: 270 }}
      transition={{ duration: 1, delay: 2.5 }}
      initial={{ opacity: 0, width: 0 }}
      style={{
        zIndex: 100
      }}
    >
      <Box
        sx={{
          position: "fixed",
          zIndex: 100,
          top: 32,
          right: 32,
          backgroundColor: "#fff",
          display: "flex",
          padding: "6px 32px",
          borderRadius: 50,
          boxShadow: 1,
          alignItems: "center",
          width: "90%",
          justifyContent: "space-between",
          maxWidth: 270
        }}
      >
        <div>
          <Link sx={{ mr: 2 }} onClick={() => navigate("/contact")} underline="none">
            Contact
          </Link>
          <Link underline="none">Galleries</Link>
        </div>
        <ToggleTheme />
      </Box>
    </motion.div>
  );
};

export default NavBar;
