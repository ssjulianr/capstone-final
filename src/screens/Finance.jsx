import React from 'react';
import BackgroundSlider from '../components/BackgroundSlider';
import BudgetTracker from '../components/BdgtTrckr/BudgetTracker';
import Footer from '../components/Footer';
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
            <section>
                
                    <article>
                    <h2>Earning</h2>
                        <p>
                        Earning is the foundation of financial well-being. It involves generating income through employment, 
                        business ventures, investments, or other sources. Understanding how to enhance your earning potential 
                        and diversify income streams can significantly impact your financial freedom. By increasing your income, 
                        you'll have more resources to allocate toward savings, investments, debt repayment, and achieving your 
                        financial goals.
                        </p>
                        <h6>Importance in Achieving Financial Freedom:</h6>
                        <ol>
                            <li>-Higher income allows you to save and invest more effectively.</li>
                            <li>-Increased earnings provide a cushion during emergencies and unexpected expenses.</li>
                            <li>-A higher income enables you to pay off debts more quickly.</li>
                            <li>-More income can accelerate the achievement of your financial goals and dreams.</li>
                        </ol>
                    </article>

                <h2>Saving & Investing</h2>
                    <article>
                        <p>
                        Saving involves setting aside a portion of your income for future needs, while investing involves putting 
                        your money to work to generate returns over time. Both saving and investing are crucial for building wealth 
                        and achieving financial freedom. Savings act as a safety net for emergencies, while investments can grow your 
                        wealth significantly over the long term.
                        </p>
                        <h6>Importance in Achieving Financial Freedom:</h6>
                        <ol>
                            <li>-Savings provide financial security during unexpected situations.</li>
                            <li>-Investments have the potential to generate passive income and capital appreciation.</li>
                            <li>-Compound interest can multiply your wealth over time, leading to financial independence.</li>
                            <li>-Diversified investments can hedge against inflation and economic uncertainties.</li>
                        </ol>
                    </article>

                <h2>Debt Management</h2>
                    <article>
                        <p>
                        Debt management involves understanding, managing, and reducing your debts. Being in control of your debt ensures 
                        that you're not burdened by high-interest payments and can allocate more resources toward savings and investments.
                        </p>
                        <h6>Importance in Achieving Financial Freedom:</h6>
                        <ol>
                            <li>-Managing debt helps you avoid excessive interest payments that can hinder wealth accumulation.</li>
                            <li>-Reducing debt frees up money for other financial goals.</li>
                            <li>-A good debt management strategy improves your credit score and financial stability.</li>
                            <li>-Being debt-free increases your financial flexibility and reduces stress.</li>
                        </ol>
                    </article>

                <h2>Budgeting</h2>
                    <article>
                        <p>
                        Budgeting is the process of creating a financial plan that outlines your income, expenses, and savings goals. 
                        It helps you track your spending, prioritize your financial goals, and ensure that you're living within your means.
                        </p>
                        <h6>Importance in Achieving Financial Freedom:</h6>
                        <ol>
                            <li>-Budgeting prevents overspending and encourages responsible financial behavior.</li>
                            <li>-It allows you to allocate funds for savings and investments systematically.</li>
                            <li>-Budgeting helps you identify areas where you can cut costs and increase your savings rate.</li>
                            <li>-A well-structured budget supports your long-term financial goals.</li>
                        </ol>
                    </article>

                <h2>Protecting Your Assets</h2>
                    <article>
                        <p>
                        Protecting your assets involves having the right insurance coverage and legal safeguards in place to mitigate risks. 
                        This includes health insurance, life insurance, disability insurance, and legal documents like wills and trusts.
                        </p>
                        <h6>Importance in Achieving Financial Freedom:</h6>
                        <ol>
                            <li>-Insurance coverage provides financial protection against unforeseen events.</li>
                            <li>-Legal safeguards ensure that your assets are distributed according to your wishes.</li>
                            <li>-Protecting assets prevents financial setbacks that could otherwise hinder your progress toward financial freedom.</li>
                            <li>-It provides peace of mind and reduces potential financial burdens on you and your loved ones.</li>
                        </ol>
                    </article>
            </section>
            
            <BudgetTracker/>
        </div>
        <Footer/>
        </>
        
    )
}

export default Finance;
