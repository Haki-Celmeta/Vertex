import React from "react";
import Client from "./Client";
import './_clients.scss';

const Clients = () => {
  return (
    <div className="clients-container">
      <h2>Comments</h2>
      <div className="clients-testimonals">
        <Client author="John Doe, Homeowner">
          "Vertex Construction exceeded our expectations.
          Their attention to detail and commitment to quality were evident throughout the entire project.
          We are thrilled with the results and would highly recommend their services."
        </Client>
        <Client author="Jane Smith, Property Developer">
          "Working with Vertex Construction was a seamless experience. Their team demonstrated professionalism,
          expertise, and a collaborative approach. Our project was completed on time,
          and the results speak for themselves. It was a pleasure partnering with Vertex Construction."
        </Client>
        <Client author="Mark Johnson, Business Owner">
          "Vertex Construction turned our vision into reality. From the initial design phase to the finishing touches,
          their dedication to excellence was evident. The team's communication and problem-solving skills
          made the construction process smooth and enjoyable.
          We look forward to future projects with Vertex Construction."
        </Client>
        <Client author="Alex Turner, Homeowner">
          "Vertex Construction stands out for its innovation and adaptability.
          They navigated unforeseen challenges with ease, ensuring our project stayed on track.
          The end result is a space that not only meets but exceeds our expectations.
          Vertex Construction truly delivers excellence in every aspect."
        </Client>
      </div>
    </div>
  )
}

export default Clients;