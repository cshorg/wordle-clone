import Keyboard from "./components/Keyboard"
import Guess from "./components/Guess"
import { useContext, useEffect } from "react"
import { MainContext } from "./context/MainContext"

function App() {
  const { word, guesses, currentGuess, handleKey } = useContext(MainContext)

  useEffect(() => {
    window.addEventListener("keyup", handleKey)

    return () => {
      window.removeEventListener("keyup", handleKey)
    }
  }, [handleKey])

  return (
    <div className="bg-neutral-950 w-screen h-[100dvh] text-white font-inter flex justify-center">
      <div className="flex flex-col items-center">
        <h1 className="mt-10 mb-8 text-4xl font-semibold">Wordle Clone</h1>

        {word}
        {JSON.stringify(guesses)}
        {currentGuess}

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
