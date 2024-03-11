import { useContext } from "react"
import { MainContext } from "../context/MainContext"
import { PiBackspace } from "react-icons/pi"

const Keyboard = () => {
  const { allGuesses, exactGuess, inexactGuess, handleKey } =
    useContext(MainContext)

  const handleClick = (key) => {
    handleKey({ key: key.toLowerCase() }) // Pass the key as lowercase
  }

  const qwerty = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]

  return (
    <div className="relative mt-10">
      <button
        onClick={() => handleKey({ key: "Enter" })}
        className="top-[132px] md:left-[5px] border border-border text-[10px] absolute h-[58px] w-[50px] md:w-[60px]  rounded-md flex items-center justify-center  uppercase font-bold hover:opacity-70"
      >
        enter
      </button>

      <button
        onClick={() => handleKey({ key: "Backspace" })}
        className="top-[132px] md:right-[5px] border border-border right-[0px] text-[10px] absolute h-[58px] w-[50px] md:w-[60px]  rounded-md flex items-center justify-center  uppercase font-semibold  hover:opacity-70"
      >
        <PiBackspace size={24} />
      </button>

      {qwerty.map((row, i) => (
        <div key={i} className="flex justify-center gap-1 mb-2">
          {row.split("").map((key) => {
            const bgColor = exactGuess().includes(key.toLowerCase())
              ? "bg-green-400 transition ease-in"
              : inexactGuess().includes(key.toLowerCase())
              ? "bg-yellow-400 transition ease-in hover:opacity-100"
              : allGuesses().includes(key.toLowerCase())
              ? "bg-gray-400 transition ease-in hover:opacity-100"
              : ""

            return (
              <button
                key={key}
                onClick={() => handleClick(key)}
                className={`${bgColor} h-[58px] border border-border w-[32px] md:w-[42px] rounded-md flex items-center justify-center md:text-[18px] uppercase font-semibold hover:opacity-70`}
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
