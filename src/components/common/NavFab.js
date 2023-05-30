import React from "react";
import { Fab } from "@mui/material";
import { HashLink } from "react-router-hash-link";

const NavFab = () => {
  return (
    <Fab size="medium" variant="extended">
      <HashLink to="/#galleries">Galleries</HashLink>
    </Fab>
  );
};

export default NavFab;
