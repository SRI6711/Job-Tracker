import { useState } from "react";
import "./Questions.css";

const Questions = () => {
  const questions = [
    {
      q: "What is React and why did you use it in this project?",
      a: "React is a JavaScript library for building UI components. We used it for state management and reusable components."
    },
    {
      q: "Explain useState and useEffect.",
      a: "useState manages component state, useEffect handles side effects like fetching data or updating localStorage."
    },
    {
      q: "How does localStorage work?",
      a: "localStorage allows storing key-value data in the browser that persists across page reloads."
    },
    {
      q: "How did you calculate the success rate?",
      a: "Success rate = (Number of Offers / Total Applications) * 100, rounded to nearest integer."
    },
    {
      q: "How does filtering work in your project?",
      a: "We filter the applications array based on status and render only matching items."
    },
    {
      q: "What improvements would you add in future?",
      a: "Adding backend API, authentication, charts, responsive design, and advanced analytics."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="questions-page">
      <h2>Interview Questions</h2>
      <ul className="question-list">
        {questions.map((item, index) => (
          <li key={index} className="question-item">
            <div
              className="question-title"
              onClick={() => toggleAnswer(index)}
            >
              {item.q}
            </div>
            {openIndex === index && (
              <div className="question-answer">{item.a}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;