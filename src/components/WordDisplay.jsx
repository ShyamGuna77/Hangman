/* eslint-disable react/prop-types */


const WordDisplay = ({ word, guessedLetters }) => {
  return (
    <div className="text-center mb-8">
      <div className="flex justify-center gap-2 mb-4 ">
      {word.split('').map((letter,index) =>(
        <div key={index} className="border-b-4 border-gray-800 w-12 h-12 flex items-center justify-center">
        <span className="text-2xl font-bold">
        {guessedLetters.includes(letter)? letter:''}
        </span>
        </div>
      )
      )}
      </div>
    </div>
  );
};

export default WordDisplay