import React from 'react';
import BotCard from './BotCard';

function MyBotArmy({ army, removeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length > 0 ? (
        army.map(bot => (
          <div key={bot.id} onClick={() => removeBot(bot.id)}>
            <BotCard bot={bot} />
          </div>
        ))
      ) : (
        <p>No bots in your army yet!</p>
      )}
    </div>
  );
}

export default MyBotArmy;
