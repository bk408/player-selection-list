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
  ]); // player list

  const [selectedPlayer, setSelectedPlayer] = useState([]); // hold the listed of selected players
  const [draggedPlayer, setDraggedPlayer] = useState(null); // store the current drag player

  const handleDragStart = (player) => {
    setDraggedPlayer(player); // when the player starts being dragged, it stores the data of that player
  };

  const handleDropInSelected = () => {
    if (draggedPlayer) {
      // check if the player is already in selectedPlayer to avoid duplicates
      if (!selectedPlayer.some((player) => player.id === draggedPlayer.id)) {
        setPlayerList(
          playerList.filter((player) => player.id !== draggedPlayer.id)
        );
        setSelectedPlayer([...selectedPlayer, draggedPlayer]);
      }
      setDraggedPlayer(null); // reset after drop
    }
  };

  const handleDropInPlayers = () => {
    if (draggedPlayer) {
      // Check if the player is already in playerList to avoid duplicates
      if (!playerList.some((player) => player.id === draggedPlayer.id)) {
        setSelectedPlayer(
          selectedPlayer.filter((player) => player.id !== draggedPlayer.id)
        );
        setPlayerList([...playerList, draggedPlayer]);
      }
      setDraggedPlayer(null); // reset after drop
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="player-container">
      <section
        className="section1"
        onDrop={handleDropInPlayers} // If a player is dropped back into section 1 from section, it removes the player from selectedPlayers and add them back to playerList ( Handles dropping back players from Section 3)
        onDragOver={handleDragOver} // Allows drag-over to enable dropping
      >
        <div className="player-box">
          <div className="player-list">
            {/* Section 1 */}
            <h3>Players</h3>
            {playerList.map((player) => (
              <span
                className="player-name"
                key={player.id}
                draggable
                onDragStart={() => handleDragStart(player)}
              >
                {player.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 */}

      <section className="section2">
        <h3>Selection List of T5 League</h3>
      </section>

      {/* Section 3 */}

      <section
        className="section3"
        onDrop={handleDropInSelected} // When a player is dropped into section 3, it removes the player from player list and add into selected players
        onDragOver={handleDragOver}
      >
        <p>Selected Players</p>
        {selectedPlayer.map((player) => (
          <span
            key={player.id}
            className="player-name"
            draggable
            onDragStart={() => handleDragStart(player)}
          >
            {player.name}
          </span>
        ))}
      </section>
    </div>
  );
};

export default Players;
