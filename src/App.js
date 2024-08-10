import React, {useState} from 'react';
import BotCollection from './components/BotCollection';
import MyBotArmy from './components/MyBotArmy';

function App() {
  const [army, setArmy] = useState([]);
  const adddBotToArmy = (bot) => {
    if(!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };
  const removeBotFromArmy = (id) => {
    setArmy(army.filter(bot => bot.id !== id));
  };
  return (
    <div className="App">
     <h1>Bott Battlr</h1>
     <div className="container">
      <BotCollection addBotToArmy={adddBotToArmy} />
      <MyBotArmy army={army} removeBot={removeBotFromArmy} />
     </div>
    
    </div>
  );
}

export default App;
