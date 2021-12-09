import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Checkout from "./Checkout";
const stripePromise = loadStripe(
  "pk_test_51JwgBdGiEGQOdu5aM33BNtFzAUe7H6TNu6FhDESjJIZrzfN5boqxDoNNnLdY6X3WHJZQ57vsfruuXt8CvwSe3WmW00SK3lX9wY"
);

const Payment = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAppointment(data);
      });
  }, [id]);
  return (
    <>
      <div>
        <h3>This is payment system for {id}</h3>
        <p>$ {appointment.price}</p>
      </div>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <Checkout appointment={appointment} />
        </Elements>
      )}
    </>
  );
};

export default Payment;
