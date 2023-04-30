import { useState, useEffect } from "react";
import React from "react";

function QuestionList() {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error(error));
  }, []);
  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
        <QuestionList questions={questions} />
      </ul>
    </section>
  );
}

export default QuestionList;
