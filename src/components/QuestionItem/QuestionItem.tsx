import { useState } from 'react';
import questions from '../../../public/questions.json';
import Button from '../Button/Button';
import styles from './QuestionItem.module.css';

interface QuestionItemProps {
  onCourseCompleted: () => void;
  numberOfQuestions: number;
  correctAnswers: string[];
  setCorrectAnswers: (answers: string[]) => void;
}

const QuestionItem = ({
  onCourseCompleted,
  numberOfQuestions,
  correctAnswers,
  setCorrectAnswers,
}: QuestionItemProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const currentQuestion = questions[currentQuestionIndex];
  const currentQuestionPosition = currentQuestionIndex + 1;
  const isQuestionLast = currentQuestionPosition === numberOfQuestions;
  const isCourseFinished =
    currentQuestionPosition !== numberOfQuestions
      ? `Next Question (${currentQuestionPosition}/${numberOfQuestions}) 🡲`
      : 'Finish The Course';

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

  const isQuestionChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(true);
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <h2 className={styles.questionHeader}>{currentQuestion.question}</h2>
      {currentQuestion.options.map((option: string, index: number) => (
        <ul className={styles.options} key={index}>
          <li>
            <input
              type="radio"
              name="option"
              className={styles.radio}
              value={option}
              checked={selectedOption === option}
              onChange={isQuestionChecked}
            />
            {option}
          </li>
        </ul>
      ))}
      <div className={styles.buttonSection}>
        <Button
          type="primary"
          text={isCourseFinished}
          onClick={handleNextQuestion}
          disabled={!isChecked}
        />
      </div>
    </>
  );
};

export default QuestionItem;
