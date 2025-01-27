/* eslint-disable react/prop-types */

const HangmanDrawing = ({ wrongGuess }) => {
  return (
    <div className="flex justify-center mb-8">
      <svg height={250} width={200}>
        <line
          x1="60"
          y1="20"
          x2="140"
          y2="20"
          className="stroke-gray-800 stroke-2"
        />
        <line
          x1="140"
          y1="20"
          x2="140"
          y2="40"
          className="stroke-gray-800 stroke-2"
        />
        <line
          x1="60"
          y1="20"
          x2="60"
          y2="230"
          className="stroke-gray-800 stroke-2"
        />
        <line
          x1="20"
          y1="230"
          x2="100"
          y2="230"
          className="stroke-gray-800 stroke-2"
        />

        {wrongGuess.length >= 1 && (
          <circle
            cx="140"
            cy="70"
            r="30"
            className="stroke-gray-800 stroke-2 fill-none"
          />
        )}
        {wrongGuess.length >= 2 && (
          <>
            <circle
              cx="130"
              cy="60"
              r="5"
              className="stroke-gray-800 stroke-2 fill-gray-800"
            />
            <circle
              cx="150"
              cy="60"
              r="5"
              className="stroke-gray-800 stroke-2 fill-gray-800"
            />
          </>
        )}
        {wrongGuess.length >= 3 && (
          <line
            x1="130"
            y1="80"
            x2="150"
            y2="80"
            className="stroke-gray-800 stroke-2"
          />
        )}
        {wrongGuess.length >= 4 && (
          <line
            x1="140"
            y1="100"
            x2="140"
            y2="150"
            className="stroke-gray-800 stroke-2"
          />
        )}
        {wrongGuess.length >= 5 && (
          <>
            <line
              x1="140"
              y1="130"
              x2="90"
              y2="100"
              className="stroke-gray-800 stroke-2"
            />
            <line
              x1="140"
              y1="130"
              x2="190"
              y2="100"
              className="stroke-gray-800 stroke-2"
            />
          </>
        )}
        {wrongGuess.length >= 6 && (
          <>
            <line
              x1="140"
              y1="150"
              x2="120"
              y2="180"
              className="stroke-gray-800 stroke-2"
            />
            <line
              x1="140"
              y1="150"
              x2="160"
              y2="180"
              className="stroke-gray-800 stroke-2"
            />
          </>
        )}
      </svg>
    </div>
  );
};

export default HangmanDrawing