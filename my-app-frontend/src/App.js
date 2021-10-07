import './App.css';
import {useEffect, useState } from 'react';
import PlayersTracker from './PlayersTracker';
import Header from './Header'; 

function App() {
  const [players, setPlayers] = useState([]);
  const [issueRequest, setIssueRequest] = useState(false);


  useEffect(() => {
    fetch("http://localhost:9292/players")
    .then((r) => r.json())
    .then((players) => setPlayers(players));
  }, [issueRequest]);

  return (
    <div className="App">
      <Header issueRequest={issueRequest} setIssueRequest={setIssueRequest} />
      <PlayersTracker players={players} issueRequest={issueRequest} setIssueRequest={setIssueRequest} />
    </div>
  );
}

export default App;
