const Score = props => {
  const { score } = props;

  return (
    <div className="Score">
      <h1>Puntaje: {score}</h1>
    </div>
  );
};

export default Score;
