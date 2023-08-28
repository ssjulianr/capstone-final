import React from "react";
import "../styles/Housing.css";
import img1 from "../images/impact.png";
import img2 from "../images/Own-a-Home-.jpeg";
import img3 from "../images/hero-image.jpeg";
import cwc from "../images/CWCLogo.png";
import habitat from "../images/habitat-logo.jpeg";
import dreamkey from "../images/DreamKey-logo.jpeg";
import Header from "../components/Header";

function Housing() {
  return (
    <div>
      <Header/>
      <div className="apple">
        <div className="overlay"></div>
        <div className="text">
          {" "}
          Housing Initiatives For First-Time Home Buyers{" "}
        </div>
      </div>

      <div className="peach">
        <div className="first-line">
          <img className="img2" src={img1} alt="Housing" />
        </div>
        <div className="second-line">
          <p className="housing-text-red">
            Banks play a significant role in helping individuals secure a home
            by providing various financial products and services. Here are some
            ways banks can assist in the home buying process:
          </p>

          <h3 className="housing-header">Mortgage Loans:</h3>
          <p className="housing-text">
            Banks offer mortgage loans, which are specialized loans designed for
            purchasing real estate. These loans allow individuals to borrow
            money to buy a home and repay it over an extended period with
            interest. Banks can help potential homeowners find the right
            mortgage option based on their financial situation and
            creditworthiness.
          </p>

          <h3 className="housing-header">Pre-Approval:</h3>
          <p className="housing-text">
            Banks can provide pre-approval for a mortgage loan. This involves
            evaluating a borrower's credit history, income, and financial
            stability to determine the maximum loan amount they can afford.
            Pre-approval gives homebuyers a clear budget range when house
            hunting.
          </p>

          <h3 className="housing-header">Down payment assistance: </h3>
          <p className="housing-text">
            Banks may offer programs that help borrowers with the upfront down
            payment, which is a percentage of the home's purchase price. Some
            banks have special programs or partnerships that provide assistance
            to first-time homebuyers or those with limited funds.
          </p>
        </div>

        <div className="new-section">
          {/* <h2 className="housing-text-red">Housing Programs</h2> */}
          <img className="house" src={img2} alt="pic of a house" />
        </div>

        <div className="fifth-line">
          <h3 className="housing-header"> Affordable Housing Programs:</h3>
          <p className="housing-text">
            These programs aim to provide housing options for individuals and
            families who may have difficulty affording market-rate housing. They
            often involve subsidies, tax incentives, or partnerships between
            government agencies and private developers to create housing units
            with reduced rents or sale prices.
          </p>

          <h3 className="housing-header">
            Low-Income Housing Tax Credits (LIHTC):{" "}
          </h3>
          <p className="housing-text">
            This program incentivizes private developers to build affordable
            housing by providing tax credits. Developers can sell these credits
            to investors to raise funds for construction while offering
            affordable rents to tenants.
          </p>

          <h3 className="housing-header">First-Time Homebuyer Programs:</h3>
          <p className="housing-text">
            These programs assist individuals and families purchasing their
            first homes by offering financial
          </p>
        </div>

        <br />

        <div className="mango">
          <a
            href="https://www.commonwealthcharlotte.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={cwc} alt="logo of cwc" />
          </a>

          <a href="https://www.habitatcltregion.org" target="_blank">
            <img src={habitat} alt="habitat for humanity logo" />
          </a>

          <a
            href="https://dreamkeypartners.org/house-charlotte-program/"
            target="_blank"
          >
            <img src={dreamkey} alt="dream key partners logo" />
          </a>
        </div>
      </div>

    </div>
  );
}

export default Housing;
