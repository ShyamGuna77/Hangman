/* eslint-disable react/prop-types */


const Keyboard = ({gameStatus,word,guessedLetters,guessLetter}) => {
  return (
    <div className="grid grid-cols-7 gap-2">
      {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letter) => (
        <button
          key={letter}
          onClick={() => guessLetter(letter)}
          disabled={guessedLetters.includes(letter) || gameStatus !== "playing"}
          className={`p-2 text-lg font-semibold rounded-lg transition-colors
            ${
              guessedLetters.includes(letter)
                ? word.includes(letter)
                  ? "bg-green-200 text-green-800"
                  : "bg-red-200 text-red-800"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }
            disabled:cursor-not-allowed
          `}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard