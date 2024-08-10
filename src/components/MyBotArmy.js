import React from 'react';
import BotCard from './BotCard';

function MyBotArmy({ army, removeBot, dischargeBot}) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length > 0 ? (
        army.map(bot => (
          <div key={bot.id}>
            <BotCard bot={bot} removeBot={removeBot} dischargeBot={dischargeBot} />
          </div>
        ))
      ) : (
        <p>No bots in your chosen army so feel free to choose one</p>
      )}
    </div>
  );
}

export default MyBotArmy;
