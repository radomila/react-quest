import { useState } from 'react';
import './styles.css';
import questions from '../../../public/questions.json';
import Button from '../Button/Button';

interface CardProps {
  onCourseCompleted: () => void;
  numberOfQuestions: number;
  correctAnswers: string[];
  setCorrectAnswers: (answers: string[]) => void;
}

const Card = ({
  onCourseCompleted,
  numberOfQuestions,
  correctAnswers,
  setCorrectAnswers,
}: CardProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const currentQuestion = questions[currentQuestionIndex];
  const currentQuestionPosition = currentQuestionIndex + 1;
  const isButtonDisabled = !isChecked;
  const isQuestionLast = currentQuestionPosition === numberOfQuestions;
  const isCourseFinished =
    currentQuestionPosition !== numberOfQuestions
      ? `Next Question (${currentQuestionPosition}/${numberOfQuestions}) 🡲`
      : 'Finish The Course';

  // Handling the next question
  const handleNextQuestion = () => {
    if (isQuestionLast) onCourseCompleted();

    if (isChecked && selectedOption === currentQuestion.answer) {
      setCorrectAnswers([...correctAnswers, selectedOption]);
    }

    if (currentQuestionPosition < numberOfQuestions) {
      setCurrentQuestionIndex(currentQuestionPosition);
    }
    setIsChecked(false);
    setSelectedOption('');
  };

  // Checking if the user's answer is checked
  const isQuestionChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(true);
    setSelectedOption(e.target.value);
  };

  return (
    <div className="card">
      <div className="card-container" key={currentQuestion.id}>
        <h2>{currentQuestion.question}</h2>
        {currentQuestion.options.map((option, index) => (
          <ul className="card-options" key={index}>
            <li>
              <input
                type="radio"
                name="option"
                className="card-radio"
                value={option}
                checked={selectedOption === option}
                onChange={isQuestionChecked}
              />
              {option}
            </li>
          </ul>
        ))}
        <div className="button-section">
          <Button
            text={isCourseFinished}
            onClick={handleNextQuestion}
            disabled={isButtonDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
