import { useState } from 'react';
import Card from './Card';
import styled from "styled-components";
import PlayerDetail from './PlayerDetail';




function PlayersTracker({ players, issueRequest, setIssueRequest, setSearchTerm, searchTerm }) {
    const [isOpen, setIsOpen] = useState('');
            
        const allPlayers = players.map((player) => {
            return(
                <main>
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
                </main>
            )   
    })

    return (
        <div className='Players'>
            <div className='background'>
                {allPlayers}
                <ModalWrapper isOpen={isOpen} onClick={() => setIsOpen('')}>
                    <PlayerDetail
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        >
                    </PlayerDetail>
                </ModalWrapper>
            </div>
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