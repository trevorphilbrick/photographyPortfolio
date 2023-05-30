import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Grid, Container, Button, Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();

  const [canSubmit, setCanSubmit] = useState(false);
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    if (formValues.name && formValues.email && formValues.message) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [formValues]);

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm("service_ulvxxqh", "template_p94lkzt", form.current, "user_i22K5THHBwbelXktaZ1FL").then(
      result => {
        console.log(result.text);
      },
      error => {
        console.log(error.text);
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Container maxWidth="md" sx={{ minHeight: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              display: "flex",
              alignItems: "center"
            }}
            onClick={() => navigate("/")}
          >
            <ArrowBackIcon />
          </div>
          <Typography variant="h3" sx={{ marginTop: 6, marginBottom: 6 }} fontWeight={"light"} letterSpacing={"4px"}>
            Contact
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="user_name"
              label="Name"
              fullWidth={{ sm: true }}
              onChange={e =>
                setFormValues({
                  ...formValues,
                  name: e.target.value
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="email"
              name="user_email"
              label="Email"
              fullWidth={{ sm: true }}
              onChange={e =>
                setFormValues({
                  ...formValues,
                  email: e.target.value
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="message"
              label="Message"
              fullWidth
              multiline
              rows={8}
              onChange={e =>
                setFormValues({
                  ...formValues,
                  message: e.target.value
                })
              }
            />
          </Grid>
          <Grid item xs={12} sx={{ padding: 1 }}>
            <Button type="submit" value="Send" variant="contained" color="success" disabled={!canSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default Contact;
