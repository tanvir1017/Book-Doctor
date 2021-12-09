import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";

const Service = (props) => {
  const { name, img, description } = props.service;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, boxShadow: 0 }} style={{ marginTop: "20%" }}>
        <CardMedia
          component="img"
          style={{ width: "auto", height: "80px", margin: "0 auto" }}
          image={img}
          alt="green iguana"
        />
        <CardContent style={{ marginTop: "10px" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" style={{}}>
            {description.slice(0, 210)}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
