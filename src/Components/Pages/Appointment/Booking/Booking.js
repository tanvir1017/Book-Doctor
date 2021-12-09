import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BoookingModal from "../BookinModal/BookingModal";

const Booking = ({ booking, date, setOpen }) => {
  const { name, time, spaceAvilable, price } = booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  return (
    <>
      <Grid item xs={12} md={4} sm={6}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography variant="h5" sx={{ color: "rgb(22, 233, 233)" }}>
            {name}
          </Typography>
          <Typography variant="h6">{time}</Typography>
          <Typography variant="caption" sx={{ display: "block" }}>
            Price ${price}
          </Typography>
          <Typography variant="caption" sx={{ display: "block" }}>
            {spaceAvilable} Spaces avilable
          </Typography>

          <button onClick={handleBookingOpen} className="common-btn">
            Book Now
          </button>
        </Paper>
      </Grid>
      <BoookingModal
        booking={booking}
        date={date}
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
        setOpen={setOpen}
      ></BoookingModal>
    </>
  );
};

export default Booking;
