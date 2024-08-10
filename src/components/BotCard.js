import React from 'react'
function BotCard({ bot, removeBot, disChargeBot}) {

    return (
        <div className="bot-card">
            <img src={bot.avatar_url} alt={bot.name} key={bot.id} />
            <h2>{bot.name}</h2>

            <p>Class: {bot.bot_class}</p>

            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Catchphrase: "{bot.catchphrase}"</p>
            {removeBot && (
                <button onClick={() => removeBot(bot.id)}>Remove from Army</button>
            )}
            {disChargeBot && (
                <button style={{ color: 'red'}} onClick={() => disChargeBot(bot.id)}>
                    Discharge
                </button>
            )}
          

        </div>
    );
}


export default BotCard