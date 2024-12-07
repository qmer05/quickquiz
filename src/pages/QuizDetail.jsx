import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const DetailContainer = styled.div`
  padding: 20px;
  margin: 20px auto;
  width: 25%;
  background-color: #f0f8ff;
  border: 1px solid #b0c4de;
  border-radius: 8px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Question = styled.h3`
  margin-bottom: 20px;
`;

const OptionsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Option = styled.li`
  background-color: #e6f2ff;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d0e7ff;
  }

  &.correct {
    background-color: #d4edda; /* Light green background for correct answer */
  }

  &.incorrect {
    background-color: #f8d7da; /* Light red background for incorrect answer */
  }
`;

const Feedback = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const QuizDetail = () => {
  const location = useLocation();
  const { quiz } = location.state;
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  // Combine correct and incorrect answers and shuffle them
  const options = [...quiz.incorrectAnswers, quiz.correctAnswer].sort(
    () => Math.random() - 0.5
  );

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsCorrect(option === quiz.correctAnswer);
  };

  return (
    <DetailContainer>
      <h2>Question</h2>
      <Question>{quiz.question.text}</Question>
      <OptionsList>
        {options.map((option, index) => (
          <Option
            key={index}
            onClick={() => handleOptionClick(option)}
            className={
              selectedOption === option
                ? isCorrect
                  ? "correct"
                  : "incorrect"
                : ""
            }
          >
            {option}
          </Option>
        ))}
      </OptionsList>
      {selectedOption && (
        <Feedback>{isCorrect ? "Correct!" : "Wrong answer!"}</Feedback>
      )}
    </DetailContainer>
  );
};

export default QuizDetail;
