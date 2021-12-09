import React from "react";
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
      <Banner></Banner>
      <BannerCard />
      <Services></Services>
      <DentalCare />
      <Appointment></Appointment>
      <PatientsSays></PatientsSays>
      <OurBLog></OurBLog>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
