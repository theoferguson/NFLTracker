
function Card({player, isOpen, setIsOpen}) {
    
    return (
        <div>
            <span className="card" onClick={() => setIsOpen(player)}>
                <p className="text"> {player.name} </p>
                <p className="text"> {player.team.name} </p>
                <p className="text"> {player.position.name} </p>
            </span>
        </div>
    )
};

export default Card;