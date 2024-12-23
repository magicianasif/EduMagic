import React, { useRef } from "react";
import NextIcon from "../../assets/next-icon.png";
import BackIcon from "../../assets/back-icon.png";
import User1 from "../../assets/user-1.png";
import User2 from "../../assets/user-2.png";
import User3 from "../../assets/user-3.png";
import User4 from "../../assets/user-4.png";

import "./Testimonials.css";

const users = [
  {
    id: 1,
    image: User1,
    name: "Alice Johnson",
    location: "EduMagic, USA",
    testimonial:
      "Choosing to pursue my degree at EduMagic was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
  },
  {
    id: 2,
    image: User2,
    name: "Michael Smith",
    location: "TechHub, UK",
    testimonial:
      "TechHub has been a phenomenal place for me to grow as a professional. The mentors and the cutting-edge resources have provided me with unparalleled opportunities.",
  },
  {
    id: 3,
    image: User3,
    name: "Sophia Williams",
    location: "Innovate, Canada",
    testimonial:
      "Innovate has opened doors to new possibilities. The focus on innovation and practical learning has prepared me well for the challenges ahead.",
  },
  {
    id: 4,
    image: User4,
    name: "Aleesha Kumar",
    location: "SkillForge, India",
    testimonial:
      "SkillForge is more than an institution; it's a journey of self-discovery. The learning environment and supportive peers have made all the difference.",
  },
];

function Testimonials() {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img
        src={NextIcon}
        alt="Next"
        className="next-icon"
        onClick={slideForward}
      />
      <img
        src={BackIcon}
        alt="Back"
        className="back-icon"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          {users.map((user) => (
            <li key={user.id}>
              <div className="slide">
                <div className="user-info">
                  <img src={user.image} alt={user.name} />
                  <div>
                    <h3>{user.name}</h3>
                    <span>{user.location}</span>
                  </div>
                </div>
                <p>{user.testimonial}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
