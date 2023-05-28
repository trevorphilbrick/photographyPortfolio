import Fab from "@mui/material/Fab";
import { Email } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const ContactFab = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Fab
      sx={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        visibility: location.pathname === "/contact" ? "hidden" : "visible",
      }}
      onClick={() => navigate("/contact")}
    >
      <Email />
    </Fab>
  );
};

export default ContactFab;
