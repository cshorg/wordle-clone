import { useContext } from "react"
import { MainContext } from "../context/MainContext"

const Keyboard = () => {
  const { allGuesses, exactGuess, inexactGuess } = useContext(MainContext)

  const qwerty = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]

  return (
    <div className="relative mt-8">
      <button className="top-[132px] md:left-[5px] text-[10px] absolute h-[58px] w-[43px] md:w-[60px] bg-button rounded-md flex items-center justify-center  uppercase font-semibold  hover:bg-opacity-70">
        enter
      </button>
      <button className="top-[132px] md:right-[5px] right-[-1px] text-[10px] absolute h-[58px] w-[43px] md:w-[60px] bg-button rounded-md flex items-center justify-center  uppercase font-semibold  hover:bg-opacity-70">
        remove
      </button>
      {qwerty.map((row, i) => (
        <div className="flex justify-center gap-1 mb-2">
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
                className={`${bgColor} h-[58px] w-[27px] md:w-[42px] bg-button rounded-md flex items-center justify-center md:text-[18px] uppercase font-semibold  hover:bg-opacity-70`}
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
