import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import treatment from "../../../../images/treatment.png";

const DentalCare = () => {
  return (
    <Container sx={{ my: 4 }}>
      <Grid container sx={{ textAlign: "left" }}>
        <Grid item xs={12} md={6}>
          <img width="70%" src={treatment} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{ margin: "auto" }}>
          <Typography variant="h4" sx={{ fontWeight: "600", mb: 2 }}>
            Exeptional Dental Care, on{" "}
            <span style={{ color: "rgb(49, 208, 248)" }}>Our Terms</span>
          </Typography>
          <Typography variant="caption text" sx={{ color: "#7e7d7d" }}>
            it is a logn established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. the point
            of using that is has a more-or-less normal distribution of letters
            as apposed to using. Content here, content here, making it look like
            readable english. Many desktop publishing packeages and web page
          </Typography>
          <br />
          <button className="common-btn">Learn More</button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DentalCare;
