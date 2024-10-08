import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';
function BotCollection({addBotToArmy}) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("https://bott-battlers-backend.vercel.app/bots")
      .then(response => response.json())
      .then(data => setBots(data));
      console.log(bots)
  }, []);

  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <div key={bot.id} onClick={() => addBotToArmy(bot)}>
          <BotCard bot={bot} />
        </div>
      ))}
    </div>
  );

}

export default BotCollection;
