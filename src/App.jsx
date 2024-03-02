import Keyboard from "./components/Keyboard"
import Guess from "./components/Guess"
import { useContext, useEffect } from "react"
import { MainContext } from "./context/MainContext"
import Navbar from "./components/Navbar"

function App() {
  const { word, guesses, currentGuess, handleKey, won, lost, init } =
    useContext(MainContext)

  useEffect(() => {
    window.addEventListener("keyup", handleKey)

    return () => {
      window.removeEventListener("keyup", handleKey)
    }
  }, [handleKey])

  return (
    <div className="flex justify-center w-screen text-white min-h-dvh bg-neutral-950 font-inter">
      <Navbar />
      <div className="flex flex-col items-center mt-[52px] ">
        <div className="flex items-center justify-center gap-4 md:mb-2">
          {won() && (
            <div className="mb-2 font-semibold text-green-400">You Won!</div>
          )}
          {lost() && (
            <div className="mb-2 font-semibold text-red-400">You Lost!</div>
          )}

          {(won() || lost()) && (
            <button
              className="py-1 px-3 border-[2px] border-border rounded-md hover:bg-border transition ease-in mb-2"
              onClick={() => init()}
            >
              Play Again
            </button>
          )}
        </div>

        <div className="mt-6">
          {guesses.map((_, i) => (
            <Guess
              key={i}
              word={word}
              guess={guesses[i]}
              isGuessed={i < currentGuess}
            />
          ))}
        </div>
        <Keyboard />
      </div>
    </div>
  )
}

export default App
