import React from 'react'
import "./experiences.scss"


const Experiences = () => {

        const experiences = [
          { year: '2024 MAY', description: 'Publicity and Public Visibility Committee Lead of WIE Affinity Group University of Ruhuna' },
          { year: '2024 APR', description: 'Design Team Lead of Eminence 4.O - IEEE Student Branch University of Ruhuna' },
          { year: '2024 JAN', description: 'Content Writer-Media Team Member of ZeroPlastic Community University of Ruhuna' },
          { year: '2023 JUN', description: 'Logistics Team Member of Sparklink 1.O IEEE Student Branch University of Ruhuna' },
          { year: '2022', description: 'Intern- Peoples Bank - Mawathagama Branch' },
        ];
      
        return (
          <div className="experience-container">
            <h3>👋Hi, I’m Tharunethu Wanniarachchi, </h3>
            <p>an engineering undergraduate at the University of Ruhuna. I'm passionate about creating intuitive UI/UX designs, stunning graphics, and dynamic websites. My toolkit includes C++, the MERN stack, MySQL, HTML, CSS, JavaScript, Figma, .NET Framework, machine learning, and Flutter for mobile app development. Let's innovate together!</p><br></br>   My Experiences         <div className="experience-grid">
                
              {experiences.map((exp, index) => (
                <div key={index} className="experience-row">
                  <div className="year">{exp.year}</div>
                  <div className="description">{exp.description}</div>
                </div>
              ))}
            </div>
          </div>
        );
      };
    export default Experiences;
