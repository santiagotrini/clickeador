import { useState } from 'react';
const App = () => {
  const [numero, setNumero] = useState(0);
  const dec = () => {
    setNumero (prev => prev - 1);
    }
  const inc = () => {
    setNumero (prev => prev + 1);
  }
  const reset = () => {
    setNumero (0);
  }
  return (
    <div>
      <h1>{numero}</h1>
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
      <button onClick={reset}>resetiar</button>
    </div>
  );
}

export default App;
