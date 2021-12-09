import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React from "react";
import "../../Home/Appointment/Appointment.css";

const ContactUs = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="appointment-bg">
      <Container>
        <Grid container spacing={2} sx={{ p: 4 }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{ color: "white", textAlign: "left" }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                fontWeight: "700",
                marginBottom: "8px",
                fontSize: "20px",
                color: "rgb(25, 210, 210)",
              }}
            >
              Contact us
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              Always contact with us
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box></Box>
              <Box>
                {" "}
                <TextField
                  fullWidth
                  sx={{
                    display: "block",
                    width: "500px !important",
                    background: "white",
                    outline: "none",
                    mb: 3,
                  }}
                  placeholder="your name"
                  maxRows={4}
                />
                <TextField
                  fullWidth
                  sx={{
                    display: "block",
                    background: "white",
                    width: "500px !important",
                    outline: "none",
                    mb: 3,
                  }}
                  placeholder="your email"
                />
                <TextField
                  fullWidth
                  sx={{
                    display: "block",
                    width: "500px !important",
                    background: "white",
                    outline: "none",
                    mb: 3,
                  }}
                  multiline
                  placeholder="your comment"
                  rows={4}
                />
                <Box sx={{ textAlign: "center" }}>
                  <button className="common-btn">Learn More</button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
