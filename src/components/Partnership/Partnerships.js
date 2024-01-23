import React from "react";
import Sweco from "../../assets/images/sweco-logo.png";
import Gensler from "../../assets/images/Gensler-logo.png";
import IBI from "../../assets/images/IBI-group-logo.png";
import BASF from "../../assets/images/BASF-logo.png";
import Salillari from "../../assets/images/Salillari-logo.png";
import Partnership from "./Partnership";
import './_partnership.scss';

const Partnerships = () => {
  return (
    <div className="partnership-container">
      <h2>Our Partnerships</h2>
      <div className="partnerships">
        <Partnership image={Sweco} firmName="Sweco" />
        <Partnership image={Gensler} firmName="Gensler" />
        <Partnership image={IBI} firmName="IBI Group" />
        <Partnership image={BASF} firmName="BASF" />
        <Partnership image={Salillari} firmName="Salillari" />
      </div>
    </div>
  )
}

export default Partnerships;