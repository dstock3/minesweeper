import './App.css';
import Main from './components/Main';
import MineBackground from './components/MineBackground';

function App() {
  
  return (
    <div className="App">
      <MineBackground mineSet="one"/>
      <MineBackground mineSet="two"/>
      <Main />
    </div>
  );
}

export default App;
