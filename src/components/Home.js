import React from 'react'
import BOAHeroImage from './BOAHero.jpg';
import BOAHealth from './BOAHealth.jpg';
import BOAHMoney from './BOAMoney.jpg';
import BOAHousing from './BOAHousing.jpg';
import Tes1 from './GOJOS.jpg';
import Tes2 from './SUKUNA.jpg';
import Tes3 from './RENGOKU.jpg';
import BANK from './BOASMILE.jpg';
import '../styles/Home.css';
import Header from './Header'
import Footer from './Footer';
import QuizBody from './QuizBody';

const Home = () => {
  return (
 <>
 <Header/>
 
 <div class="categories">
         <div class="small-container">
           <div class="roww">
              <div class="col-3">
                   <h2>Change You Can See.</h2>
               </div>  
               <div class="col-2">
                  <img src={BANK}/>
               </div> 
               
           </div>
       </div>
     </div>

  <div class="offer">
       <div class="small-container">
           <div class="roww">
           <div class="col-2">
               <img src={BOAHeroImage} class="offer-img"/>
           </div>
           <div class="col-2">
               <h1>Our Mission</h1>
               <small>"Elevating Communities, Enriching Lives: committed to creating lasting positive change through impactful philanthropy. Our focus on education, healthcare, and sustainable solutions drives us to build stronger, more vibrant communities for everyone."</small>
               <br/>
               <a href="/" class="bttn">Find Locations! &#8594;</a>
           </div>
       </div>
     </div>
   
     
  <div class="small-container">
        <h2 class="title">How we help</h2>
           <div class="roww">
               <div class="col-4">
                   <a href="/health"><img src={BOAHealth}/></a>
                   <h4>Health</h4>
                   <h5> Scheduele an appointment </h5>
               </div> 
               <div class="col-4">
                   <a href="/housing"><img src={BOAHousing}/></a>
                   <h4>Housing</h4>
                  <h5>Find programs that suit your needs! </h5>
               </div> 
               <div class="col-4">
               <a href="/finance"><img src={BOAHMoney}/></a>
                   <h4>Finances</h4>
                  <h5>Keep track of your finances</h5>
               </div> 
           </div>
       </div>
   </div>
   <div class="testimonial">
       <div class="small-container">
       <div class="roww">
           
           <div class="col-3">
                      <p>This site is fire!</p>
                       <img src={Tes3}/>
                       <h3>Rengoku</h3>
           </div> 
           <div class="col-3">
                      <p>I got approved for a new loan in minutes!</p>
                       <img src={Tes1}/>
                       <h3>Gojo Satoru</h3>
           </div>
            <div class="col-3">
                      <p>Was able to build my credit and buy a my first
                         house!</p>
                       <img src={Tes2}/>
                       <h3>Sukuna</h3>
           </div>
               
       </div>
       </div>
   </div>
    <QuizBody/>
   
  <Footer/>
 </>

  )
}

export default Home
