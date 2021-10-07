import './App.css';
import {useEffect, useState } from 'react';
import PlayersTracker from './PlayersTracker';
import Header from './Header'; 

function App() {
  const [players, setPlayers] = useState([]);
  const [issueRequest, setIssueRequest] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  


  useEffect(() => {
    fetch("http://localhost:9292/players")
    .then((r) => r.json())
    .then((players) => setPlayers(players));
  }, [issueRequest]);

  const displayedPlayers = players.filter((player) => {
    return player.name.toLowerCase().includes(searchTerm.toLowerCase());
  });



  return (
    <div className="App">
      <Header issueRequest={issueRequest} setIssueRequest={setIssueRequest} players={displayedPlayers} searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} />
      <PlayersTracker players={displayedPlayers} issueRequest={issueRequest} setIssueRequest={setIssueRequest} searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}/>
    </div>
  );
}

export default App;
