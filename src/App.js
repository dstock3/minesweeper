import Main from './components/Main';
import MineBackground from './components/MineBackground';

function App() {
  return (
    <div className="App">
      <MineBackground mineSet="one"/>
      <MineBackground mineSet="two"/>
      <MineBackground mineSet="three"/>
      <MineBackground mineSet="four"/>
      <MineBackground mineSet="one"/>
      <MineBackground mineSet="two"/>
      <MineBackground mineSet="three"/>
      <MineBackground mineSet="four"/>
      <Main />
    </div>
  );
}

export default App;
