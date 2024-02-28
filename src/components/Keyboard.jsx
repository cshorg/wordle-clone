import { useContext } from "react"
import { MainContext } from "../context/MainContext"

const Keyboard = () => {
  const { allGuesses, exactGuess, inexactGuess } = useContext(MainContext)

  const qwerty = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]

  return (
    <div className="mt-8">
      {qwerty.map((row) => (
        <div className="flex justify-center gap-2 mb-2">
          {row.split("").map((key) => {
            const bgColor = exactGuess().includes(key)
              ? "bg-green-400"
              : inexactGuess().includes(key)
              ? "bg-yellow-400"
              : allGuesses().includes(key)
              ? "bg-gray-400 cursor-not-allowed hover:bg-opacity-100"
              : ""

            return (
              <button
                className={`${bgColor} w-[46px] bg-button rounded-md flex items-center justify-center text-[18px] uppercase font-semibold h-[56px] hover:bg-opacity-70`}
              >
                {key}
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
