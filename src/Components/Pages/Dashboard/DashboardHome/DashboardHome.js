import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import Calender from "../../Shared/Calender/Calender";
import Appointment from "../Dashboard/Appointment";

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Grid container spacing={2}>
      <Grid item sx={{ boxShadow: 3 }} xs={12} md={4} lg={4}>
        <Box sx={{ width: 1 }}>
          <Calender date={date} setDate={setDate}></Calender>
        </Box>
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Appointment date={date}></Appointment>
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
