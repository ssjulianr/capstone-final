import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './screens/Healthcare.jsx'
import HealthCare from './screens/Healthcare.jsx';
import Home from './components/Home';
import MobileClinic from './screens/MobileClinic';
import Housing from './screens/Housing';
import Finance from './screens/Finance';
import Login from './login'
import Signup from './Signup'
import { Provider } from 'react-redux';
import { store } from './redux/index';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/health' element={<HealthCare />} />
        <Route path='/mobile' element={<MobileClinic />} />
        <Route path="/housing" element={<Housing/>}/> 
        <Route path="/finance" element={<Finance/>}/>
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
