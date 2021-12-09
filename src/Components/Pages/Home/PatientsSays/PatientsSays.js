import { Box, Container, Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import people_1 from "../../../../images/people-1.png";
import people_2 from "../../../../images/people-2.png";
import people_3 from "../../../../images/people-3.png";

const PatientsSays = () => {
  return (
    <Container sx={{ my: 5, p: 5 }} className="quote">
      <Typography
        variant="body1"
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          color: "rgb(49, 208, 248)",
        }}
      >
        TESTIMONIAL
      </Typography>
      <Typography
        variant="h4"
        sx={{ textAlign: "left", fontWeight: "600", my: 3 }}
      >
        What's Our Patients <br /> Says
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={6}
            sx={{ p: 3, textAlign: "justify", color: "#7e7e7e" }}
          >
            <Typography variant="caption text">
              How can you tell if a customer is satisfied or not? The best
              solution is to use customer satisfaction surveys. These allow you
              to obtain feedback from customers who would have not shared.
            </Typography>
            <Box sx={{ m: 3, display: "flex" }}>
              <img width="25%" src={people_1} alt="" />
              <Grid sx={{ ml: 3 }}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "rgb(49, 208, 248)" }}
                >
                  Winson Harry
                </Typography>
                <Typography variant="capiton text">California</Typography>
              </Grid>
            </Box>
          </Paper>
        </Grid>{" "}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={6}
            sx={{ p: 3, textAlign: "justify", color: "#7e7e7e" }}
          >
            <Typography variant="caption text">
              How can you tell if a customer is satisfied or not? The best
              solution is to use customer satisfaction surveys. These allow you
              to obtain feedback from customers who would have not shared.
            </Typography>
            <Box sx={{ m: 3, display: "flex" }}>
              <img width="25%" src={people_2} alt="" />
              <Grid sx={{ ml: 3 }}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "rgb(49, 208, 248)" }}
                >
                  Annie Swipt
                </Typography>
                <Typography variant="capiton text">California</Typography>
              </Grid>
            </Box>
          </Paper>
        </Grid>{" "}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={6}
            sx={{ p: 3, textAlign: "justify", color: "#7e7e7e" }}
          >
            <Typography variant="caption text">
              How can you tell if a customer is satisfied or not? The best
              solution is to use customer satisfaction surveys. These allow you
              to obtain feedback from customers who would have not shared.
            </Typography>
            <Box sx={{ m: 3, display: "flex" }}>
              <img width="25%" src={people_3} alt="" />
              <Grid sx={{ ml: 3 }}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "rgb(49, 208, 248)" }}
                >
                  Sabrina
                </Typography>
                <Typography variant="capiton text">New york</Typography>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PatientsSays;
