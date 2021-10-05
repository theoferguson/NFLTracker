
function Card({team,position,name}) {
    
    return (
        <div>
            <span className="card">
                <p className="text"> {name} </p>
                <p className="text"> {team} </p>
                <p className="text"> {position} </p>
            </span>
        </div>
    )
};

export default Card;