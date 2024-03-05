import { createContext, useEffect, useState } from "react"
import words from "../api/words.json"

export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
  const [word, setWord] = useState("")
  const [guesses, setGuesses] = useState(["", "", "", "", "", ""])
  const [currentGuess, setCurrentGuess] = useState(0)
  const [helpModal, setHelpModal] = useState(false)
  const [statsModal, setStatsModal] = useState(false)

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    setWord(words[Math.round(Math.random() * words.length)])
    setGuesses(["", "", "", "", "", ""])
    setCurrentGuess(0)
  }

  const won = () => {
    if (guesses[currentGuess - 1] === word) {
      setStatsModal(true)

      return true
    }
    return false
  }

  const lost = () => {
    if (currentGuess === 6) {
      setStatsModal(true)

      return true
    }
    return false
  }

  const allGuesses = () => {
    return guesses.slice(0, currentGuess).join("").split("")
  }

  const exactGuess = () => {
    return word.split("").filter((letter, i) => {
      guesses
        .slice(0, currentGuess)
        .map((word) => word[i])
        .includes(letter)
    })
  }

  const inexactGuess = () => {
    return word.split("").filter((letter) => allGuesses().includes(letter))
  }

  const submitGuess = () => {
    if (words.includes(guesses[currentGuess])) {
      setCurrentGuess(currentGuess + 1)
    } else {
      console.log("Not a word!")
    }
  }

  const handleKey = (e) => {
    if (won() || lost()) return

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
        setHelpModal
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
