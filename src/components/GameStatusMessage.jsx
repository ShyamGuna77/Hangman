/* eslint-disable react/prop-types */


const GameStatusMessage = ({gameStatus,word}) => {
  return (
   <div className="text-center mb-8 text-xl font-bold">
      {gameStatus === 'won' && <p className="text-green-600">Congratulations! You guessed the word!</p>}
      {gameStatus === 'lost' && (
        <p className="text-red-600">You lost! The word was: <span className="font-mono">{word}</span></p>
      )}
      </div>
  )
}

export default GameStatusMessage