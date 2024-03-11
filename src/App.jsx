import Keyboard from "./components/Keyboard"
import Guess from "./components/Guess"
import { useContext, useEffect } from "react"
import { MainContext } from "./context/MainContext"
import Navbar from "./components/Navbar"
import StatsModal from "./components/StatsModal"
import HelpModal from "./components/HelpModal"

// finish themes with selected type

// fix yellow tiles even when that letter is not used anymore

// optimize component structure

function App() {
  const {
    won,
    lost,
    word,
    setStatsModal,
    guesses,
    currentGuess,
    handleKey,
    theme
  } = useContext(MainContext)

  useEffect(() => {
    window.addEventListener("keyup", handleKey)

    return () => {
      window.removeEventListener("keyup", handleKey)
    }
  }, [handleKey])

  return (
    <div className={`${theme}`}>
      {won() ? setStatsModal(true) : lost() && setStatsModal(true)}

      <StatsModal />
      <HelpModal />

      <div className="flex justify-center w-screen text-neutral-900 dark:text-white min-h-dvh bg-[#d2d2e386] dark:bg-neutral-950 font-inter">
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
    </div>
  )
}

export default App
