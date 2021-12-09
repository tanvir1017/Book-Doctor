import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import people_2 from "../../../../images/people-2.png";
import people_3 from "../../../../images/people-3.png";
import "../../Home/Appointment/Appointment.css";

const OurBLog = () => {
  return (
    <Container sx={{ my: 5, p: 5 }}>
      <Typography
        variant="body1"
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          color: "rgb(49, 208, 248)",
        }}
      >
        Our Blog
      </Typography>
      <Typography
        variant="h4"
        sx={{ textAlign: "left", fontWeight: "600", my: 3 }}
      >
        From Our Blog News
      </Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={4}>
          <Paper
            className="firstBlog"
            elevation={6}
            sx={{
              py: 2,
              px: 3,
              textAlign: "justify",
              color: "black",
              fontWeight: "500",
            }}
          >
            <Box sx={{ m: 3, display: "flex", textAlign: "left" }}>
              <Grid sx={{ ml: 0 }}>
                <Typography variant="body1" sx={{ fontWeight: "bold", mb: 0 }}>
                  Dr: Rashid Khan
                </Typography>
                <Typography
                  variant="capiton text"
                  sx={{
                    color: "black",
                    fontSize: "14px",
                    marginTop: "-10px",
                    marginBottom: "10px",
                  }}
                >
                  23 april 2021
                </Typography>
              </Grid>
            </Box>
            <Typography variant="h6" sx={{ mb: 3, fontWieght: "300" }}>
              Check at least a doctor in a year for your treeth
            </Typography>
            <Typography variant="h6" sx={{ marginTop: "42px" }}>
              {" "}
              <br />
              <i class="fas fa-long-arrow-alt-right"></i>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={6}
            sx={{
              py: 2,
              px: 3,
              textAlign: "justify",
              color: "black",
              fontWeight: "500",
            }}
          >
            <Box sx={{ m: 3, display: "flex", textAlign: "left" }}>
              <img style={{ width: "55px" }} src={people_2} alt="" />
              <Grid sx={{ ml: 3 }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Dr: Caudi
                </Typography>
                <Typography
                  variant="capiton text"
                  sx={{ color: "#7e7d7d", fontSize: "14px", marginTop: "-6px" }}
                >
                  23 april 2021
                </Typography>
              </Grid>
            </Box>
            <Typography variant="h6" sx={{ mb: 3 }}>
              2 Times of bursh in a day kepp you healthy
            </Typography>
            <Typography variant="body2" sx={{ color: "#7e7d7d" }}>
              The best solution is to use customer satisfaction surveys. These
              allow you to obtain feedback from customers who would have not
              shared.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={6}
            sx={{
              py: 2,
              px: 3,
              textAlign: "justify",
              color: "black",
              fontWeight: "500",
            }}
          >
            <Box sx={{ m: 3, display: "flex", textAlign: "left" }}>
              <img style={{ width: "55px" }} src={people_3} alt="" />
              <Grid sx={{ ml: 3 }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Dr: mrs Jhony
                </Typography>
                <Typography
                  variant="capiton text"
                  sx={{ color: "#7e7d7d", fontSize: "14px", marginTop: "-6px" }}
                >
                  23 april 2021
                </Typography>
              </Grid>
            </Box>
            <Typography variant="h6" sx={{ mb: 3 }}>
              The treeth cancer is taking a chellange
            </Typography>
            <Typography variant="body2" sx={{ color: "#7e7d7d" }}>
              The best solution is to use customer satisfaction surveys. These
              allow you to obtain feedback from customers who would have not
              shared.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurBLog;
