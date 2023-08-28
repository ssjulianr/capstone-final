import React ,{useEffect}from 'react';

const Footer = () => {
    useEffect(() => {const script = document.createElement('script'); script.src = "https://kit.fontawesome.com/c4254e24a8.js"; script.async = true; document.body.appendChild(script);return () => { document.body.removeChild(script); }; }, []);
    return (

<div class="Footer">
<div class="col-a">
<h3>USEFUL LINKS</h3>
<a href="#">About</a>
<a href="#">Services</a>
<a href="#">Contact</a>
</div>
<div class="col-b">
<h3>NEWSLETTER</h3>
<form>
<input type="email" placeholder="Your Email Address" required/>
<br/>
<button type="submit">SUBSCRIBE NOW</button>
</form>
</div>
<div class="col-c">
<h3>CONTACT</h3>
<p>124, Conch St.<br/>Bikini Bottom</p>
<div class="social-icons">
<i class="fab fa-facebook"></i>
<i class="fab fa-twitter"></i>
<i class="fab fa-instagram"></i>
</div>
</div>
</div>
  )
}

export default Footer