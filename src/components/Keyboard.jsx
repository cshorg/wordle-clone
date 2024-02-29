import { useContext } from "react"
import { MainContext } from "../context/MainContext"

const Keyboard = () => {
  const { allGuesses, exactGuess, inexactGuess, handleKey } =
    useContext(MainContext)

  const handleClick = (key) => {
    handleKey({ key: key.toLowerCase() }) // Pass the key as lowercase
  }

  const qwerty = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]

  return (
    <div className="relative mt-4">
      <button
        onClick={() => handleKey({ key: "Enter" })}
        className="top-[132px] md:left-[5px] text-[10px] absolute h-[58px] w-[43px] md:w-[60px] bg-button rounded-md flex items-center justify-center  uppercase font-semibold  hover:opacity-70"
      >
        enter
      </button>
      <button
        onClick={() => handleKey({ key: "Backspace" })}
        className="top-[132px] md:right-[5px] right-[-1px] text-[10px] absolute h-[58px] w-[43px] md:w-[60px] bg-button rounded-md flex items-center justify-center  uppercase font-semibold  hover:opacity-70"
      >
        remove
      </button>
      {qwerty.map((row, i) => (
        <div className="flex justify-center gap-1 mb-2">
          {row.split("").map((key) => {
            const bgColor = inexactGuess().includes(key)
              ? "bg-yellow-400 transition ease-in hover:opacity-100"
              : exactGuess().includes(key)
              ? "bg-green-400 transition ease-in"
              : allGuesses().includes(key)
              ? "bg-gray-400 transition ease-in hover:opacity-100"
              : ""

            return (
              <button
                key={key}
                onClick={() => handleClick(key)}
                className={`${bgColor} h-[58px] w-[27px] md:w-[42px] bg-button rounded-md flex items-center justify-center md:text-[18px] uppercase font-semibold hover:opacity-70`}
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
