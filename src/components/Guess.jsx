const Guess = ({ word, guess, isGuessed }) => {
  return (
    <div className="flex gap-2 mt-2">
      {new Array(5).fill(0).map((_, i) => {
        const bgColor = !isGuessed
          ? ""
          : guess[i] === word[i]
          ? "bg-green-400"
          : word.includes(guess[i])
          ? "bg-yellow-400"
          : ""

        return (
          <div
            className={`${bgColor} w-[52px] h-[52px] sm:w-[62px] sm:h-[62px] border-[2px] border-border rounded-sm flex items-center justify-center uppercase text-[18px] font-semibold`}
          >
            {guess[i]}
          </div>
        )
      })}
    </div>
  )
}

export default Guess
