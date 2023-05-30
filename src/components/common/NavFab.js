import React from "react";
import { Fab, useTheme } from "@mui/material";
import { HashLink } from "react-router-hash-link";

const NavFab = () => {
  const theme = useTheme();
  return (
    <Fab size="medium" variant="extended">
      <HashLink to="/#galleries" smooth style={{ textDecoration: "none", color: theme.palette.text.primary }}>
        Galleries
      </HashLink>
    </Fab>
  );
};

export default NavFab;
