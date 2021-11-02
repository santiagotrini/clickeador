const Timer = props => {
  const { time } = props;
  return (
    <div className="Timer">
      <h1>{time}</h1>
    </div>
  );
};

export default Timer;
