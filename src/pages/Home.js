import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [players, setPlayers] = useState([]);

  async function fetchPlayers() {
    const response = await axios.get("http://localhost:4000/players");
    // console.log("The players", response.data);
    setPlayers(response.data);
    // setPlayers("hey hey");
  }
  console.log("Players state", players);
  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div>
      {players.map((player) => (
        <h2>{player.name}</h2>
      ))}
      This is the Home Page
    </div>
  );
}
