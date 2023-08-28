import React from "react";

const categories = [
  "Mental Health",
  "Pediatrics",
  "Physician",
  "Medicine",
  "Primary Care",
  "Occupational Therapists",
  "Gynecologists",
  "Adult Health",
  "Urgent Care",
];
const genders = ["Male", "Female"];
const availabilities = ["Mon", "Tue", "Wed", "Thu", "Fri"];

function Filters({ setSelectedFilters }) {
  const handleCategoryChange = (event) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      category: event.target.value,
    }));
  };

  const handleGenderChange = (event) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      gender: event.target.value,
    }));
  };

  const handleAvailabilityChange = (event) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      availability: event.target.value,
    }));
  };

  return (
    <div className="searchbar-ctnr">
      <div className="search-bar">
        <h3 className="doctor-header"> Find your doctor </h3>
        <select className="option" onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select className="option" onChange={handleGenderChange}>
          <option value="">Select Gender</option>
          {genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
        <select className="option" onChange={handleAvailabilityChange}>
          <option value="">Select Availability</option>
          {availabilities.map((availability) => (
            <option key={availability} value={availability}>
              {availability}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filters;
