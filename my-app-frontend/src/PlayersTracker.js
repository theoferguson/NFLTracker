import {useState } from 'react';
import Card from './Card';

function PlayersTracker({players}) {

    const allPlayers = players.map(player => {
        return (
            <Card
                key={player.id}
                team={player.team}
                position={player.position}
                name={player.name}
                />
        )
    })

    return (
        <div className='Players'>
            {allPlayers}
        </div>
    )


};

export default PlayersTracker;