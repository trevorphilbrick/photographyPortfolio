import Fab from "@mui/material/Fab";
import { Email } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const ContactFab = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Fab
      sx={{
        visibility: location.pathname === "/contact" ? "hidden" : "visible",
        display: location.pathname === "/contact" ? "none" : "inline-flex",
        ml: 3
      }}
      onClick={() => navigate("/contact")}
    >
      <Email />
    </Fab>
  );
};

export default ContactFab;
