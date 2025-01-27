import { useState, useEffect } from "react";
import { Keyboard as KeyboardIcon } from "lucide-react";
import Keyboard from "./components/keyboard";
import HangmanDrawing from "./components/HangmanDrawing";
import WordDisplay from "./components/WordDisplay";
import GameStatusMessage from "./components/GameStatusMessage";
import confetti from "canvas-confetti";


const words = [
  "REACT",
  "KINGSHYAM",
  "PRABHAS",
  "BAHUBALI",
  "RADHESHYAM",
  "MAHESHBABU",
  "PUSHPA",
  "ANIME",
  "JESUSCHRIST",
  "MESSI",
  "RONALDO",
];

function App() {
  const [word, setWord] = useState("");
  const [wrongGuess, setWrongGuess] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [gameStatus, setGameStatus] = useState("playing");

  useEffect(() => {
    setWord(words[Math.floor(Math.random() * words.length)].toUpperCase());
  }, []);

  useEffect(() => {
    if (gameStatus === "won") {
      // Trigger the confetti animation when the game is won
     triggerConfetti()

      const timer = setTimeout(() => {
        setGameStatus("playing"); // Reset the game after 5 seconds
        resetGame();
      }, 5000); // 5 seconds delay

      return () => clearTimeout(timer); // Cleanup the timeout on component unmount
    }
  }, [gameStatus]);







  const guessLetter = (letter) => {
    if (gameStatus !== "playing") return; // Prevent guessing if the game is over

    const upperCaseLetter = letter.toUpperCase();

    if (!guessedLetters.includes(upperCaseLetter)) {
      const newGuessedLetters = [...guessedLetters, upperCaseLetter];
      setGuessedLetters(newGuessedLetters);

      if (!word.includes(upperCaseLetter)) {
        const newWrongGuesses = [...wrongGuess, upperCaseLetter];
        setWrongGuess(newWrongGuesses);

        if (newWrongGuesses.length >= 6) {
          setGameStatus("lost");
        }
      } else if (
        word.split("").every((char) => newGuessedLetters.includes(char))
      ) {
        setGameStatus("won");
      }
    }
  };


  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { x: 0.5, y: 0.5 },
    });
  };
  
  const resetGame = () => {
    setWord(words[Math.floor(Math.random() * words.length)].toUpperCase());
    setGuessedLetters([]);
    setWrongGuess([]);
    setGameStatus("playing");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <KeyboardIcon className="w-8 h-8" />
            Hangman Game
          </h1>
          <button
            className="px-4 py-2 font-bold text-xl text-white bg-purple-600 rounded-lg"
            onClick={resetGame}
          >
            New Game
          </button>
        </div>

        <HangmanDrawing wrongGuess={wrongGuess} />
        <WordDisplay word={word} guessedLetters={guessedLetters} />
        <GameStatusMessage gameStatus={gameStatus} word={word} />
        <Keyboard
          guessedLetters={guessedLetters}
          gameStatus={gameStatus}
          guessLetter={guessLetter}
          word={word}
        />
      </div>
    </div>
  );
}

export default App;
