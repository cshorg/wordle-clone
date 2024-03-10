import Keyboard from "./components/Keyboard"
import Guess from "./components/Guess"
import { useContext, useEffect } from "react"
import { MainContext } from "./context/MainContext"
import Navbar from "./components/Navbar"
import StatsModal from "./components/StatsModal"
import HelpModal from "./components/HelpModal"

// finish themes with selected type
// fix keyboard coloring, no green currently **
// fix yellow tiles even when that letter is not used anymore

// for some reason takes an extra enter at the end to submit, could be a rerender error
// extra enter issue comes down to rendering the modals, game is finishing just takes two enters for modal to show

// add toast for "not correct guess"
// optimize component structure

function App() {
  const { won, lost, word, setStatsModal, guesses, currentGuess, handleKey } =
    useContext(MainContext)

  useEffect(() => {
    window.addEventListener("keyup", handleKey)

    return () => {
      window.removeEventListener("keyup", handleKey)
    }
  }, [handleKey])

  return (
    <>
      {won() ? setStatsModal(true) : lost() && setStatsModal(true)}

      <StatsModal />
      <HelpModal />

      <div className="flex justify-center w-screen text-white min-h-dvh bg-neutral-950 font-inter">
        <Navbar />
        <div className="flex flex-col items-center mt-[52px]  rounded-md">
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
    </>
  )
}

export default App
