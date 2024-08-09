import './App.css';
import BotCard from './components/BotCard';
import BotCollection from './components/BotCollection';
import MyBotArmy from './components/MyBotArmy';

function App() {
  return (
    <div className="App">
      <h1>Bott battlr army</h1>
      <MyBotArmy />
      <BotCollection />
    </div>
  );
}

export default App;
