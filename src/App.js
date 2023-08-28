import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HeaderFooter from "./components/HeaderFooter.js";
import Home from "./components/Home";
import React, { useState } from 'react';
import ProviderList from '../src/components/DoctorAppointment/ProviderList';
import Filters from '../src/components/DoctorAppointment/Filter';
import providersData from '../src/components/DoctorAppointment/providers.json';
import HealthCare from '../src/screens/Healthcare';
import Housing from './screens/Housing'
import MobileClinic from '../src/screens/MobileClinic'
import Header from "./components/Header";


function App() {

  const [selectedFilters, setSelectedFilters] = useState({
    category: '',
    gender: '',
    availability: '',
  });

  // Assuming providersData contains the JSON data you provided
  const filteredProviders = providersData.filter(provider => {
    // const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedFilters.category === '' || provider.specialty === selectedFilters.category;
    const matchesGender = selectedFilters.gender === '' || provider.gender === selectedFilters.gender;
    const matchesAvailability = selectedFilters.availability === '' || provider.availability.includes(selectedFilters.availability);
    
    return  matchesCategory && matchesGender && matchesAvailability;
  });
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/health" element={<HealthCare />}/>
        <Route path="/housing" element={<Housing/>}/> 
        <Route path="/mobile" element={<MobileClinic/>}/> 
    </Routes>
    </>
    
 

  );
}

export default App;