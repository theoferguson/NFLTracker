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
                <Box background="#007bff">
                    <Visual className="modal-body">
                        <strong>Name:</strong>
                        <div>{player.name}</div>
                        <strong>Team:</strong>
                        <div>{player.team.name}</div>
                    </Visual>
                    <button onClick={() => setIsOpen('')}>Close Info</button>
                </Box>
            </ModalWindow>
        </div>
    );
};

const ModalWindow = styled.div`
  width: 75%;
  height: 500px;
`;

const Box = styled.div`
  background: ${props => props.background || "aliceblue"};
  display: grid;
  place-items: center;
  padding: 1rem;
`;

const Visual = styled.div`
  background: ${props => props.background || "aliceblue"};
  /* height: 300px; */
  width: 100%;
`;

export default PlayerDetail;