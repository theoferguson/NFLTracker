import { useEffect, useState } from "react";
import styled from "styled-components";


function PlayerDetail({ isOpen, setIsOpen }) {
    const [player, setPlayer] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:9292/players/${isOpen.id}`)
            .then((r) => r.json())
            .then((player) => setPlayer(player));
    }, [isOpen]);

    if (!player) return <h2>Loading player data...</h2>;

    console.log(player)

    return (
        <div>
            <ModalWindow onClick={e => e.stopPropagation()}>
                    <Visual className="modal-body">
                        <strong>Name:</strong>
                        <div>{player.name}</div>
                        <strong>Position:</strong>
                        <div>{player.position.name}</div>
                        <strong>Team:</strong>
                        <div>{player.team.name}</div>
                        <strong>Teammates:</strong>
                        <div>{player.team.players.map(player => <div>{player.name}</div>)}</div>

                        <button onClick={() => setIsOpen('')}>Close Info</button>
                    </Visual>
            </ModalWindow>
        </div>
    );
};

const ModalWindow = styled.div`
    background-image: url("https://www.freeiconspng.com/uploads/football-png-11.png");
    background-repeat: no-repeat;
    background-position: center center;
    height: 550px;
    width: 450px;
    background-size: cover;
    position: relative;
`;

const Visual = styled.div`
  height: 600px;
  width: 100%;
  transform: translate(0, 25%);
  color: white;
`;

export default PlayerDetail;