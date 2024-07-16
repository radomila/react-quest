import Button from '../Button/Button';
import './styles.css';

interface ResultsProps {
  correctAnswers: string[];
  numQuestions: number;
  onHandleResetCourse: () => void;
}

const Results = ({
  correctAnswers,
  numQuestions,
  onHandleResetCourse,
}: ResultsProps) => {
  let emojiReaction;
  const numCorrectAnswers = correctAnswers.length;
  const percentage = Math.ceil((numCorrectAnswers * 100) / numQuestions);

  if (percentage >= 90) {
    emojiReaction = `🎉`;
  } else if (percentage >= 70) {
    emojiReaction = `🤔`;
  } else {
    emojiReaction = `🙈`;
  }

  const result = `Your overall score is ${percentage}% ${emojiReaction} `;

  return (
    <div className="results-container">
      <h2>{result}</h2>
      <p className="results-caption">
        To see the answers with the explanation or repeat the course, please
        click one of the buttons bellow.{' '}
      </p>
      <div className="results-buttons">
        <Button type="secondary" text="answers" disabled={false} />
        <Button
          type="secondary"
          text="repeat"
          disabled={false}
          onClick={onHandleResetCourse}
        />
      </div>
    </div>
  );
};

export default Results;
