import { Alert, Container, Typography } from "@mui/material";
import React from "react";
import error from "../../../../images/dribbble_1.gif";

const NotFound = () => {
  return (
    <div style={{ marginTop: "2%" }}>
      <Container>
        <Alert severity="warning">
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Please go backe as soon as possible. This page is not safe for you!
          </Typography>
        </Alert>
      </Container>
      <img src={error} sx={{ width: 1 }} alt="" />
    </div>
  );
};

export default NotFound;
