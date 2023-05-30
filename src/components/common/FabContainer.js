import React from "react";
import NavFab from "./NavFab";
import ContactFab from "./ContactFab";
import { Box } from "@mui/material";

const FabContainer = () => {
  return (
    <Box sx={{ position: "fixed", bottom: 32, right: 32, zIndex: 200 }}>
      <NavFab />
      <ContactFab />
    </Box>
  );
};

export default FabContainer;
