import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import style from "./Banner.module.css";

const BannerCard = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "-40px", marginBottom: "60px" }}>
      <Grid
        className={style.bannerCard}
        container
        columns={{ xs: 2, sm: 8, md: 12 }}
        spacing={{ xs: 1, md: 3 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Container>
            <Card sx={{ minWidth: "250px" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#0abdb4",
                  borderRadius: "0px",
                }}
              >
                <Box
                  style={{
                    color: "white",
                    marginRight: "6%",
                    fontSize: "50px",
                  }}
                >
                  <i class="far fa-clock"></i>
                </Box>
                <Box>
                  {" "}
                  <Typography
                    sx={{ fontSize: 25, fontWeight: "700", color: "white" }}
                  >
                    Opening 24/7
                  </Typography>
                  <Typography sx={{ color: "white", fontSize: "13px" }}>
                    Book now
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Container>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Container>
            <Card
              sx={{ minWidth: 300, border: "0", boxShadow: "none !important" }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#0f0f21",
                  borderRadius: "0px",
                }}
              >
                <Box
                  style={{
                    color: "white",
                    marginRight: "6%",
                    fontSize: "50px",
                  }}
                >
                  <i class="fas fa-map-marker-alt"></i>
                </Box>
                <Box>
                  {" "}
                  <Typography
                    sx={{ fontSize: 25, fontWeight: "700", color: "white" }}
                  >
                    Visit our location
                  </Typography>
                  <Typography sx={{ color: "white", fontSize: "13px" }}>
                    Brooklyn, United states
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Container>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Container>
            <Card sx={{ minWidth: 300, border: "0", boxShadow: "0" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#20ccf7",
                  borderRadius: "0px",
                }}
              >
                <Box
                  style={{
                    color: "white",
                    marginRight: "6%",
                    fontSize: "50px",
                  }}
                >
                  <i class="fas fa-phone-alt"></i>
                </Box>
                <Box>
                  {" "}
                  <Typography
                    sx={{ fontSize: 25, fontWeight: "700", color: "white" }}
                  >
                    Contact us now
                  </Typography>
                  <Typography sx={{ color: "white", fontSize: "13px" }}>
                    +880 1784070569
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BannerCard;
