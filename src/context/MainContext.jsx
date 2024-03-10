import { createContext, useEffect, useState } from "react"
import toast from "react-hot-toast"
import words from "../api/words.json"

export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
  const [word, setWord] = useState("")
  const [guesses, setGuesses] = useState(["", "", "", "", "", ""])
  const [currentGuess, setCurrentGuess] = useState(0)
  const [gameState, setGameState] = useState(null)

  const [helpModal, setHelpModal] = useState(false)
  const [statsModal, setStatsModal] = useState(false)

  const [playerStats, setPlayerStats] = useState(() => {
    const savedStats = localStorage.getItem("wordleStats")
    return savedStats
      ? JSON.parse(savedStats)
      : {
          played: 0,
          total: 0,
          streak: 0,
          percent: 0,
          completeGames: 0
        }
  })

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    setWord(words[Math.round(Math.random() * words.length)])
    setGuesses(["", "", "", "", "", ""])
    setCurrentGuess(0)
    setGameState(null)
  }

  const won = () => {
    if (guesses[currentGuess - 1] === word) {
      let currentStats = { ...playerStats }
      currentStats.played += 1
      currentStats.total += 1
      currentStats.streak += 1
      currentStats.completeGames += 1
      currentStats.percent =
        (currentStats.total / currentStats.completeGames) * 100

      setPlayerStats(currentStats)
      localStorage.setItem("wordleStats", JSON.stringify(currentStats))

      setGameState("won")
      setGuesses(["", "", "", "", "", ""])
      setCurrentGuess(0)

      return true
    }
    return false
  }

  const lost = () => {
    if (currentGuess === 6) {
      let currentStats = { ...playerStats }
      currentStats.played += 1
      currentStats.streak = 0
      currentStats.completeGames += 1
      currentStats.percent =
        (currentStats.total / currentStats.completeGames) * 100

      setPlayerStats(currentStats)
      localStorage.setItem("wordleStats", JSON.stringify(currentStats))

      setGameState("lost")
      setGuesses(["", "", "", "", "", ""])
      setCurrentGuess(0)

      return true
    }
    return false
  }

  const allGuesses = () => {
    return guesses.slice(0, currentGuess).join("").split("")
  }

  const exactGuess = () => {
    return word.split("").filter((letter, i) => {
      return guesses
        .slice(0, currentGuess)
        .map((word) => word[i])
        .includes(letter)
    })
  }

  const inexactGuess = () => {
    return word.split("").filter((letter) => allGuesses().includes(letter))
  }

  const submitGuess = () => {
    setTimeout(() => {
      if (words.includes(guesses[currentGuess])) {
        return setCurrentGuess(currentGuess + 1)
      } else {
        if (guesses[currentGuess].length === 5) {
          toast("Not a valid word!", {
            icon: "⚠️",
            style: {
              borderRadius: "5px",
              background: "rgba(24,24,27)",
              border: "1px solid rgba(48,48,54)",
              color: "#fff"
            }
          })
        }
      }
    }, 100)
  }

  const handleKey = (e) => {
    if (statsModal || helpModal) return

    if (won() || lost()) return

    console.log(word)

    if (e.key === "Enter") return submitGuess()

    if (e.key === "Backspace") {
      const updatedGuess = [...guesses]
      updatedGuess[currentGuess] = updatedGuess[currentGuess].slice(
        0,
        updatedGuess[currentGuess].length - 1
      )
      setGuesses(updatedGuess)
      return
    }

    if (
      guesses[currentGuess].length < 5 &&
      e.key.length === 1 &&
      e.key.match(/[A-z]/)
    ) {
      const updatedGuess = [...guesses]
      updatedGuess[currentGuess] += e.key.toLowerCase()
      setGuesses(updatedGuess)
    }
  }

  return (
    <MainContext.Provider
      value={{
        word,
        setWord,
        guesses,
        setGuesses,
        currentGuess,
        handleKey,
        allGuesses,
        exactGuess,
        inexactGuess,
        won,
        lost,
        init,
        statsModal,
        setStatsModal,
        helpModal,
        setHelpModal,
        gameState
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
