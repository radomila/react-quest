import { useState } from 'react';

import questions from '../../../public/questions.json';
import Card from '../Card/Card';
import Results from '../Results/Results';
import QuestionItem from '../QuestionItem/QuestionItem';

const CourseContainer = () => {
  const [isCourseCompleted, setIsCourseCompleted] = useState<boolean>(false);
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);

  const numberOfQuestions = questions.length;

  const handleResetCourse = () => {
    setIsCourseCompleted(false);
    setCorrectAnswers([]);
  };

  const handleCourseCompleted = () => {
    setIsCourseCompleted(true);
  };

  const handleCorrectAnswers = (answers: string[]) => {
    setCorrectAnswers(answers);
  };

  return (
    <Card>
      {isCourseCompleted ? (
        <Results
          correctAnswers={correctAnswers}
          numQuestions={numberOfQuestions}
          onHandleResetCourse={handleResetCourse}
        />
      ) : (
        <QuestionItem
          numberOfQuestions={numberOfQuestions}
          onCourseCompleted={handleCourseCompleted}
          correctAnswers={correctAnswers}
          setCorrectAnswers={handleCorrectAnswers}
        />
      )}
    </Card>
  );
};

export default CourseContainer;
