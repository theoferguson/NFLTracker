import './App.css';
import {useEffect, useState } from 'react';
import PlayersTracker from './PlayersTracker';
import Header from './Header'; 

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/players")
    .then((r) => r.json())
    .then((players) => setPlayers(players));
  }, []);

  return (
    <div className="App">
      <Header />
      <PlayersTracker players={players} />
    </div>
  );
}

export default App;
