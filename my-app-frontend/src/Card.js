
function Card(props) {
    const { player, isOpen, setIsOpen, id, issueRequest, setIssueRequest } = props;


    const deletePlayer = (id) => {
        console.log(id)

        fetch(`http://localhost:9292/players/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setIssueRequest(!issueRequest)
        })
    }

    return (
        <div>
            <span className="card">
                <button className="button" onClick={() => setIsOpen(player)}>Show</button>
                <p className="text"> {player.name} </p>
                <p className="text"> {player.team.name} </p>
                <p className="text"> {player.position.name} </p>
                <button className="button" onClick={() => deletePlayer(id)}>X</button>

            </span>
        </div>
    )
};

export default Card;