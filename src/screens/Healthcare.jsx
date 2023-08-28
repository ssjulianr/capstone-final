import React from "react";
import "../styles/Health.css";
import "../components/DoctorAppointment/ProviderList";
import { useState, useEffect } from "react";
import Filters from "../components/DoctorAppointment/Filter";
import providersData from "../components/DoctorAppointment/providers.json";
import ProviderList from "../components/DoctorAppointment/ProviderList";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function HealthCare() {
  const [selectedFilters, setSelectedFilters] = useState({
    category: "",
    gender: "",
    availability: "",
  });

  const [filteredProviders, setFilteredProviders] = useState([]);

  useEffect(() => {
    const filteredProviders = providersData.filter((provider) => {
      const matchesCategory =
        selectedFilters.category === "" ||
        provider.specialty === selectedFilters.category;
      const matchesGender =
        selectedFilters.gender === "" ||
        provider.gender === selectedFilters.gender;
      const matchesAvailability =
        selectedFilters.availability === "" ||
        provider.availability.includes(selectedFilters.availability);

      return matchesCategory && matchesGender && matchesAvailability;
    });

    setFilteredProviders(filteredProviders);
  }, [selectedFilters]);

  return (
    <>
    <Header/>
      <div section className="healthpage">
      <div className="headerr">
        <div className="overlay"></div>
        <div className="text"> Increasing access to healthcare </div>
      </div>
      {/* 
      <section class="facts-section">
        <h2 class="facts-header">Did You Know?</h2>
        <div class="facts-images">
          <div class="fact-image">
            <img src={require("../images/fact1.png")} alt="Fact 1" />
          </div>
          <div class="fact-image">
            <img src={require("../images/fact2.png")} alt="Fact 2" />
          </div>
          <div class="fact-image">
            <img src={require("../images/fact3.png")} alt="Fact 3" />
          </div>
        </div>
      </section> */}

      <div class="health-about-section">
        <img
          src={require("../images/solution.png")}
          className="health-about-img"
          alt=""
        />
        <div class="health-about-content">
          <h5 className="health-secondary-heading"> Our Solution </h5>
          <h2 className="health-heading"> Primary care in minutes</h2>
          <p class="paragraph">
            Talk to a board-certified doctor of your choice, by phone or
            video.Affordable, hassle-free,telehealth appointments from quality
            healthcare providers on your schedule. No membership fees, no
            surprise bills, no insurance needed.
          </p>
          <button className="doctor-btn">Find My Doctor</button>
        </div>
      </div>

      <div class="health-about-section">
        <div class="health-about-content">
          <h2 className="health-heading"> Mobile health clinics</h2>
          <h5 className="health-secondary-heading">
            {" "}
            Bringing healthcare to you{" "}
          </h5>
          <p class="paragraph">
            There are an estimated 3,000 mobile clinics in the U.S. with 10
            million visits each year. By making health care accessible for both
            rural and urban communities, mobile clinics ensure that everyone has
            access to lifesaving preventive, primary care, and specialty
            services. As trusted providers of quality health care, mobile
            clinics reach marginalized communities and advance health equity.
          </p>
          <Link to="/mobile">
            <button className="doctor-btn">Find a mobile clinic </button>
          </Link>
        </div>
        <img
          src={require("../images/mobile.png")}
          className="health-about-img"
          alt=""
        />
      </div>
      {/* <section className="benefits-section">
        <div className="benefit">
          <img src="" className="benegit-img" alt="" />
          <h5 className="benefit-header"> Improve Care Coordination</h5>
          <p className="benefit-text">
            {" "}
            Support more timely, cost-effective interventions, with fewer ER
            visits and reduced re-admissions
          </p>
        </div>
        <div className="benefit">
          <img src="" className="benegit-img" alt="" />
          <h5 className="benefit-header"> Expanded Reach </h5>
          <p className="benefit-text">
            Telehealth breaks down geographical barriers, allowing patients in
            rural or underserved areas to connect with specialists and
            healthcare providers who might be located far away.{" "}
          </p>
        </div>
        <div className="benefit">
          <img src="" className="benegit-img" alt="" />
          <h5 className="benefit-header"> Reduced Wait Times</h5>
          <p className="benefit-text">
            {" "}
            Telehealth appointments can reduce wait times since they are
            typically scheduled more efficiently, leading to quicker access to
            medical advice, prescriptions, and treatment plans.
          </p>
        </div>
      </section> */}

      <Filters setSelectedFilters={setSelectedFilters} />
      <ProviderList providers={filteredProviders} />
    </div>
    </>
    
  );
}

export default HealthCare;
