import axios from 'axios';
import { useEffect, useState } from 'react';
const url = 'http://localhost:4000/api/scores';

const HiScores = props => {

  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then(res => {
        console.log('Llendo a buscar datos al backend...');
        console.log(res.data);
        setScores(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="HiScores">
      <h1>HiScores</h1>
      <ul>
        {scores.map(score => <li key={score._id}>{score.player} {score.score}</li>)}
      </ul>
    </div>
  );
};

export default HiScores;
