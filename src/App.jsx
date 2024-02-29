import Keyboard from "./components/Keyboard"
import Guess from "./components/Guess"
import { useContext, useEffect } from "react"
import { MainContext } from "./context/MainContext"

function App() {
  const { word, guesses, currentGuess, handleKey, won, lost, init } =
    useContext(MainContext)

  useEffect(() => {
    console.log(word)
    window.addEventListener("keyup", handleKey)

    return () => {
      window.removeEventListener("keyup", handleKey)
    }
  }, [handleKey])

  return (
    <div className="flex justify-center w-screen h-[100dvh] text-white bg-neutral-950 font-inter">
      <div className="flex flex-col items-center">
        <h1 className="mt-10 mb-8 text-4xl font-semibold">Wordle Clone</h1>

        {won() && <div className="mb-2 text-green-400">You Won!</div>}
        {lost() && <div className="mb-2 text-red-400">You Lost!</div>}

        {(won() || lost()) && (
          <button
            className="py-1 px-3 border-[2px] border-border rounded-md hover:bg-border transition ease-in mb-2"
            onClick={() => init()}
          >
            Play Again
          </button>
        )}

        {guesses.map((_, i) => (
          <Guess
            key={i}
            word={word}
            guess={guesses[i]}
            isGuessed={i < currentGuess}
          />
        ))}

        <Keyboard />
      </div>
    </div>
  )
}

export default App
