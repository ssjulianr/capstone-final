import React from 'react';
import BackgroundSlider from '../components/BackgroundSlider';
import BudgetTracker from '../components/BdgtTrckr/BudgetTracker';
import Header from '../components/Header';
import '../styles/Finance.css'
const Finance = () =>{

    return(
        <>
        <Header/>
        <div className='paycheck'>
            <BackgroundSlider/>
                <h1>Financial Literacy</h1>
            <BudgetTracker/>
        </div>
        
        </>
        
    )
}

export default Finance;
