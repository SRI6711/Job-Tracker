import React, { useState } from "react";
import "./Questions.css";

function Questions() {

const [tech, setTech] = useState("html");

const questions = {
html: ["What is HTML?", "What are semantic tags?"],
css: ["What is Flexbox?", "What is CSS Grid?"],
javascript: ["What is closure?", "What is event bubbling?"],
react: ["What is React?", "What is useState?"],
python: ["What is Python?", "What is list comprehension?"],
django: ["What is Django?", "What is MVT architecture?"],
mysql: ["What is MySQL?", "What is JOIN?"]
};

return (
<div>

{/* NAVBAR */}
<div className="tech-navbar">
<span onClick={()=>setTech("html")}>HTML</span>
<span onClick={()=>setTech("css")}>CSS</span>
<span onClick={()=>setTech("javascript")}>JAVASCRIPT</span>
<span onClick={()=>setTech("react")}>REACT</span>
<span onClick={()=>setTech("python")}>PYTHON</span>
<span onClick={()=>setTech("django")}>DJANGO</span>
<span onClick={()=>setTech("mysql")}>MYSQL</span>
</div>

{/* QUESTIONS */}
<div className="questions">
<h2>{tech.toUpperCase()} Questions</h2>

<ul>
{questions[tech].map((q,index)=>(
<li key={index}>{q}</li>
))}
</ul>

</div>

</div>
);
}

export default Questions;