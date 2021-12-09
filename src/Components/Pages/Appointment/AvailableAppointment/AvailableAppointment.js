import CloseIcon from "@mui/icons-material/Close";
import {
  Alert,
  Container,
  Grid,
  IconButton,
  Snackbar,
  Typography
} from "@mui/material";
import React from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Treeth Orthodontics",
    time: "8.00 AM - 9.00 PM",
    spaceAvilable: "10",
    price :28
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "10.00 AM - 12.00 PM",
    spaceAvilable: "3",
    price :20
  },
  {
    id: 3,
    name: "Treeth Cleaning",
    time: "12.00 AM - 11.00 PM",
    spaceAvilable: "10",
    price :25
  },
  {
    id: 4,
    name: "Cravity Protection",
    time: "2.00 AM - 12.00 PM",
    spaceAvilable: "8",
    price :19
  },
  {
    id: 5,
    name: "Treeth Repair",
    time: "3.00 AM - 1.00 PM",
    spaceAvilable: "7",
    price :32
  },
  {
    id: 6,
    name: "Treeth Fill",
    time: "12.00 AM - 9.00 PM",
    spaceAvilable: "14",
    price :40
  },
  {
    id: 7,
    name: "Treeth Organize",
    time: "10.00 AM - 9.00 PM",
    spaceAvilable: "8",
    price :20
  },
];
const AvailableAppointment = ({ date }) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <Container>
      <Typography variant="h4" sx={{ fontWeight: "bold", py: 3 }}>
        Appointment are available{" "}
        <span style={{ color: "rgb(22, 233, 233)" }}>
          {date.toDateString()}{" "}
        </span>
      </Typography>
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking
            key={booking.id}
            booking={booking}
            setOpen={setOpen}
            date={date}
          ></Booking>
        ))}
      </Grid>
      {open && (
        <Snackbar open={open} autoHideDuration={6000} action={action}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            We accept your appointment
          </Alert>
        </Snackbar>
      )}
    </Container>
  );
};

export default AvailableAppointment;
