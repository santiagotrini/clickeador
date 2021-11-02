const Play = props => {
  const {
    startTimer,
    playing,
    clicks,
    setClicks
  } = props;

  const handleClick = () => {
    if (playing)
      setClicks(clicks + 1);
  };
  return (
    <div className="Play">
      <div
        className="PlayArea"
        onClick={handleClick}
      />
      <button onClick={startTimer}>Jugar</button>
      <h2>Clicks: {clicks}</h2>
    </div>
  );
};

export default Play;
