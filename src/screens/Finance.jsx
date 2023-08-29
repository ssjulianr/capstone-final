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
            <section id="about-head" className="section-p1">
                <img src="https://www.annuity.org/wp-content/uploads/financial-literacy-1.jpg" alt="Rapper"/>
                <div>
                    <h2>Mosaic's 5 Principles of Financial Literacy</h2>
                    <ol>
                        <li>1) Earning</li>
                        <li>2) Saving & Investing</li>
                        <li>3) Debt Management</li>
                        <li>4) Budgeting</li>
                        <li>5) Protecting Your Assets</li>
                    </ol>
                        
                </div>
            </section>
            <h1>Earning</h1>
            <h1>Saving & Investing</h1>
            <h1>Debt Management</h1>
            <h1>Budgeting</h1>
            <h1>Protecting Your Assets</h1>
            <BudgetTracker/>
        </div>
        
        </>
        
    )
}

export default Finance;
