import "./Skills.css";

const Skills = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "useState & useEffect",
    "Local Storage",
    "Git & GitHub",
    "Responsive Design"
  ];

  return (
    <div className="skills-page">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;