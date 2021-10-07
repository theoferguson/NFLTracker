import { useState } from 'react';
import Card from './Card';
import styled, { css } from "styled-components";
import PlayerDetail from './PlayerDetail';

function PlayersTracker({ players, issueRequest, setIssueRequest }) {
    const [isOpen, setIsOpen] = useState('');

    const allPlayers = players.map((player) => {
        return (
            <Card
                className="card"
                key={player.id}
                id={player.id}
                player={player}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                issueRequest={issueRequest}
                setIssueRequest={setIssueRequest}
            />
        )
    })

    return (
        <div className='Players'>
            {allPlayers}
            <ModalWrapper isOpen={isOpen} onClick={() => setIsOpen('')}>
                <PlayerDetail
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    >
                    </PlayerDetail>
            </ModalWrapper>
        </div>
    )


};

const ModalWrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  place-items: center;
  background: rgba(255, 255, 255, 0.7);
`;

export default PlayersTracker;