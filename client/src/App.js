// componentes
import Timer from './Timer';
import Play from './Play';
import Score from './Score';
import HiScores from './HiScores';

const App = () => {
  return (
    <div className="App">
      <div className="Top">
        <Timer />
        <Play />
      </div>
      <Score />
      <HiScores />
    </div>
  );
}

export default App;
