import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Appointment from "../Appointment/Appointment";
import Banner from "../Banner/Banner";
import BannerCard from "../BannerCard/BannerCard";
import ContactUs from "../ContactUs/ContactUs";
import DentalCare from "../DentalCare/DentalCare";
import OurBLog from "../OurBLog/OurBLog";
import PatientsSays from "../PatientsSays/PatientsSays";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <BannerCard />
      <Services />
      <DentalCare />
      <Appointment />
      <PatientsSays />
      <OurBLog />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
