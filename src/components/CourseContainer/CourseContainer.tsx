import { useState } from 'react';
import './styles.css';
import Card from '../Card/Card';
import Results from '../Results/Results';
import questions from '../../../public/questions.json';

const CourseContainer = () => {
  const [isCourseCompleted, setIsCourseCompleted] = useState<boolean>(false);
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);

  const numberOfQuestions = questions.length;

  const handleCourseCompleted = () => {
    setIsCourseCompleted(true);
  };

  const handleCorrectAnswers = (answers: string[]) => {
    setCorrectAnswers(answers);
  };

  return (
    <>
      {isCourseCompleted ? (
        <Results
          correctAnswers={correctAnswers}
          numQuestions={numberOfQuestions}
        />
      ) : (
        <Card
          correctAnswers={correctAnswers}
          setCorrectAnswers={handleCorrectAnswers}
          numberOfQuestions={numberOfQuestions}
          onCourseCompleted={handleCourseCompleted}
        />
      )}
    </>
  );
};

export default CourseContainer;
