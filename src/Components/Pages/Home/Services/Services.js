import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import cavity from "../../../../images/cavity.png";
import fluoride from "../../../../images/fluoride.png";
import whitening from "../../../../images/whitening.png";
import Service from "../Service/Service";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "How does fluoride work? Fluoride helps prevent cavities and decay by coming in direct contact with the tooth enamel (the outside of the tooth). But, if you consume fluoride from sources such as drinking water, it gets absorbed in your bloodstream. Then it attacks the enamel on the inside of the tooth.",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Amalgam. Dentists have been using amalgam fillings for decades. These fillings combine mercury, silver, copper, and tin. Amalgam fillings are a great choice for people looking for a strong and long-lasting option.",
    img: cavity,
  },
  {
    name: "Treeth Whitening",
    description:
      "Combine 2 teaspoons of hydrogen peroxide with 1 teaspoon of baking soda and gently brush your teeth with the mixture. Limit the use of this homemade paste to a few times per week, as overuse can erode your tooth enamel. You can buy hydrogen peroxide online. a whitening toothpaste.",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography variant="h6" style={{ color: "rgb(25 210 210)" }}>
          Our Services
        </Typography>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
