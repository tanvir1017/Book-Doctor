import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import bg from "../../../../images/bg.png";
import chair from "../../../../images/chair.png";
import "../Appointment/Appointment.css";

const bannerbg = {
  background: `url(${bg})`,
  marginTop: "20px",
};
const vertical = {
  height: 450,
  display: "flex",
  alignItems: "center",
};
const Banner = () => {
  return (
    <div style={bannerbg}>
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{ ...vertical, textAlign: "left" }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#0a0b24" }}
            >
              Your new smile <br /> Start here
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgb(107, 106, 106)", fontWeight: "300", my: 3 }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              est illo architecto quidem accusantium iste!
            </Typography>
            <button className="common-btn">Get appointment</button>
          </Grid>
          <Grid item xs={12} md={6} style={vertical}>
            <img style={{ width: "350px" }} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
