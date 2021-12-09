import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import doctor from "../../../../images/doctor.png";
import "./Appointment.css";

const Appointment = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="appointment-bg">
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          style={{ marginTop: "-110px", marginBottom: "-6px" }}
        >
          <img style={{ width: "400px" }} src={doctor} alt="" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={7}
          sx={{ color: "white", textAlign: "left" }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "400",
              marginBottom: "8px",
              fontSize: "20px",
              color: "rgb(25, 210, 210)",
            }}
          >
            Appointment
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "8px" }}
          >
            Make an appointment <br /> Today
          </Typography>
          <Typography sx={{ fontWeight: "300" }} variantMapping="body2">
            It's a long established fact that a reader will be distractedby the
            readable content a page when you looking at its
          </Typography>
          <button className="common-btn">Learn More</button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Appointment;
