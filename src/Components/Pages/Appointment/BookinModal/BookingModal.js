import { TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  handleBookingClose,
  openBooking,
  booking,
  date,
  setOpen,
}) => {
  const { name, time, price } = booking;
  const { user } = useAuth();
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
    time: "",
  };

  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };
  const handleLoadPage = (e) => {
    //collect data
    const appointment = {
      ...bookingInfo,
      time,
      price,
      serviceName: name,
      date: date.toLocaleDateString(),
    };
    console.log(appointment);
    console.log(new Date());

    //send date
    fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setOpen(true);
          handleBookingClose();
        }
      });
    e.preventDefault();
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="caption text"
              sx={{
                fontWeight: 500,
                color: "rgb(22, 233, 233)",
                textAlign: "center",
                mb: 3,
                display: "block",
              }}
            >
              {name}{" "}
              <span style={{ color: "black", fontwieght: "300" }}>
                {date.toDateString()}
              </span>
                 <br/>
              <h5 style={{ color: "black", fontwieght: "700" }}>
                Price ${price}
              </h5>
            </Typography>
            <form onSubmit={handleLoadPage}>
              <TextField
                sx={{ width: "100%", m: 1 }}
                id="outlined-time-input"
                label="time"
                type="text"
                defaultValue={date.toDateString()}
                name="time"
                required
              />
              <TextField
                sx={{ width: "100%", m: 1 }}
                id="outlined-name-input"
                defaultValue={user.displayName}
                label="Name"
                name="patientName"
                onBlur={handleOnBlur}
                type="text"
                required
              />

              <TextField
                sx={{ width: "100%", m: 1 }}
                id="outlined-email-input"
                defaultValue={user.email}
                name="email"
                label="Email"
                onBlur={handleOnBlur}
                type="email"
                required
              />

              <TextField
                required
                sx={{ width: "100%", m: 1 }}
                id="outlined-phone-input"
                name="phone"
                label="Contact"
                onBlur={handleOnBlur}
                type="text"
                defaultValue="+880 "
              />
              <Box sx={{ textAlign: "right" }}>
                <button className="common-btn">Book Now</button>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default BookingModal;
