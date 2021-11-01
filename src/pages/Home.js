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
        <li>
          <h1>{player.name}</h1>
          <h>{player.age}</h>
          <h2>{player.nationality} </h2>
          <img src={player.profilePicture} />
        </li>
      ))}
      This is the Home Page
    </div>
  );
}
