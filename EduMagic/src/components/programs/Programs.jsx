import React from "react";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png"; // Example of another program image
import program_3 from "../../assets/program-3.png"; // Example of another program image
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png"; // Example of another program image
import program_icon_3 from "../../assets/program-icon-3.png"; // Example of another program image
import "./Programs.css";

function Programs() {
  const programs = [
    {
      id: 1,
      image: program_1,
      icon: program_icon_1,
      caption: "Graduation Degree",
    },
    {
      id: 2,
      image: program_2,
      icon: program_icon_2,
      caption: "Masters Degree",
    },
    {
      id: 3,
      image: program_3,
      icon: program_icon_3,
      caption: "Post Graduation",
    },
  ];

  return (
    <div className="programs">
      {programs.map((program) => (
        <div key={program.id} className="program">
          <img src={program.image} alt={`Program ${program.id}`} />
          <div className="caption">
            <img src={program.icon} />
            <p>{program.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Programs;
