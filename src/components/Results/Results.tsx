import './styles.css';

interface ResultsProps {
  correctAnswers: string[];
  numQuestions: number;
}

const Results = ({ correctAnswers, numQuestions }: ResultsProps) => {
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
    </div>
  );
};

export default Results;
