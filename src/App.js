import React, { useState } from "react";
import "./App.css";
import Success from "./components/Success";
import Asking from "./components/Asking";
import flowerBear from "./flowerBear.gif";
import madBear from "./madBear.gif";

/**
 * Main App component managing the Valentine's Day proposal.
 *
 * @returns {JSX.Element} JSX element representing the App component.
 */
const App = () => {
  // State to track acceptance and rejection
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [noButtonText, setNoButtonText] = useState("No");
  const [lastRejectedIndex, setLastRejectedIndex] = useState(-1);

  // Handler for accepting the proposal
  const handleAccept = () => {
    setAccepted(true);
  };

  // Handler for rejecting the proposal
  const handleReject = () => {
    setRejected(true);
    // Array of rejection messages
    const rejectionTexts = [
      "Are you sure?",
      "Maybe try again?",
      "Think again!",
      "Loser :(",
    ];
    // Randomly select a rejection message
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * rejectionTexts.length);
    } while (randomIndex === lastRejectedIndex);

    setLastRejectedIndex(randomIndex);
    setNoButtonText(rejectionTexts[randomIndex]);
  };

  return (
    <div className="App">
      <div className="App-body">
        {/* Asking to be my Valentine */}
        {!accepted && (
          <Asking
            gif={rejected ? madBear : flowerBear}
            altText={rejected ? "Rejected Bear" : "I love you Bear"}
            handleAccept={handleAccept}
            handleReject={handleReject}
            noButtonText={noButtonText}
          />
        )}

        {/* She said YES! */}
        {accepted && <Success />}
      </div>
    </div>
  );
};

export default App;
