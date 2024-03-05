import Keyboard from "./components/Keyboard"
import Guess from "./components/Guess"
import { useContext, useEffect } from "react"
import { MainContext } from "./context/MainContext"
import Navbar from "./components/Navbar"
import StatsModal from "./components/StatsModal"
import HelpModal from "./components/HelpModal"

// finish themes with selected type
// implement headless ui dialog for stats/correct word/replay
// implement headless ui dialog for help/questions

// fix keyboard coloring, no green currently
// fix yellow tiles even when that letter is not used anymore
// for some reason takes an extra enter at the end to submit, could be a rerender error
// optimize component structure

// stop submit from being called more than once, hitting enter on dialog takes you back to previous game then you can spam enter for infinit loop

function App() {
  const {
    word,
    guesses,
    currentGuess,
    handleKey,
    won,
    lost,
    init,
    statsModal,
    setStatsModal,
    helpModal,
    setHelpModal
  } = useContext(MainContext)

  useEffect(() => {
    window.addEventListener("keyup", handleKey)

    return () => {
      window.removeEventListener("keyup", handleKey)
    }
  }, [handleKey])

  return (
    <>
      <StatsModal status={{ statsModal, setStatsModal }} />
      <HelpModal status={{ helpModal, setHelpModal }} />
      <div className="flex justify-center w-screen text-white min-h-dvh bg-neutral-950 font-inter">
        <Navbar />

        <div className="flex flex-col items-center mt-[52px] ">
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
