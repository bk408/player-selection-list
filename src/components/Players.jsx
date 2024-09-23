

import { useState } from "react";

const Players = () => {
  const [playerList, setPlayerList] = useState([
    { id: 1, name: "warner" },
    { id: 2, name: "head" },
    { id: 3, name: "smith" },
    { id: 4, name: "maxwell" },
    { id: 5, name: "marsh" },
    { id: 6, name: "zampa" },
    { id: 7, name: "starc" },
    { id: 8, name: "hazelwood" },
    { id: 9, name: "carey" },
    { id: 10, name: "david" },
  ]);
  return (
    <div className="player-container">
      <section className="section1">
        <div className="player-box">
          <div className="player-list">
            <h3>Players</h3>
            {playerList.map((player) => (
              <span className="player-name" key={player.id}>
               
                {player.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section2">
        <h3>Selection List of T5 League</h3>
      </section>

      <section className="section3">
        <p>Selected Players</p>
      </section>
    </div>
  );
};

export default Players;


