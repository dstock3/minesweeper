import { useState } from 'react';
import Minesweeper from '../src/components/Minesweeper'
import './App.css';

function App() {
  const [mineInst, setMineInst] = useState(0)
  return (
    <div className="App">
      <Minesweeper mineInst={mineInst} setMineInst={setMineInst} key={new Date().getTime()}/>
    </div>
  );
}

export default App;
