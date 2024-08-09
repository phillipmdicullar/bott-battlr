import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';
function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(response => response.json())
      .then(data => setBots(data));
      console.log(bots)
  }, []);

  return (
    <div>
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} />
      ))}
    </div>
  );
}

export default BotCollection;
