import { useState } from 'react';
import questions from '../../../public/questions.json';
import './styles.css';
import Button from '../Button/Button';

const Card = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const numberOfQuestions = questions.length;

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestionIndex + 1;

    if (currentQuestionIndex < numberOfQuestions) {
      setCurrentQuestionIndex(nextQuestion);
      setIsChecked(false);
    }
  };

  const isQuestionChecked = () => {
    setIsChecked(true);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isButtonDisabled = !isChecked;

  return (
    <div className="card">
      <div className="card-container" key={currentQuestion.id}>
        <h2>{currentQuestion.question}</h2>
        {currentQuestion.options.map((option, index) => {
          return (
            <ul className="card-options" key={index}>
              <li>
                <input
                  type="radio"
                  name="option"
                  className="card-radio"
                  onClick={isQuestionChecked}
                />
                {option}
              </li>
            </ul>
          );
        })}
      </div>
      <div className="button-section">
        <Button
          text={`Next Question (${
            currentQuestionIndex + 1
          }/${numberOfQuestions})`}
          onClick={handleNextQuestion}
          disabled={isButtonDisabled}
        />
      </div>
    </div>
  );
};

export default Card;
