import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { VscDebugRestart } from "react-icons/vsc"
import { IoCloseSharp } from "react-icons/io5"
import { MainContext } from "../context/MainContext"

const StatsModal = ({ isOpen }) => {
  const { statsModal, setStatsModal, word, setHelpModal, gameState, init } =
    useContext(MainContext)

  const handleRestart = () => {
    init()
    setStatsModal(false)
  }

  const handleLearn = () => {
    setStatsModal(false)
    setHelpModal(true)
  }

  return (
    <Transition.Root show={statsModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setStatsModal(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-opacity-75 bg-border" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative p-6 overflow-hidden text-left transition-all transform border rounded-lg shadow-xl border-border bg-neutral-900 sm:my-8 sm:w-full sm:max-w-lg">
                <div className="text-white">
                  <div className="flex justify-end w-full ">
                    <div
                      className="cursor-pointer hover:opacity-80"
                      onClick={() => setStatsModal(false)}
                    >
                      <IoCloseSharp size={28} />
                    </div>
                  </div>
                  <h1 className="text-xl font-semibold text-center uppercase ">
                    Statistics
                  </h1>

                  {gameState === "won" || gameState === "lost" ? (
                    <>
                      <h2 className="mt-4 text-lg font-semibold text-center">
                        You <a className="uppercase">{gameState}</a>, the
                        correct word is <a className="uppercase">{word}</a>!
                      </h2>
                    </>
                  ) : null}

                  <div className="flex flex-wrap items-center justify-center gap-2 mt-6 font-semibold md:justify-between">
                    <div className="flex bg-border/30 flex-col justify-center gap-2 items-center h-[100px] w-[220px] border border-border rounded-md">
                      <span className="text-6xl font-semibold">
                        {JSON.parse(localStorage.getItem("wordleStats"))
                          ?.played || 0}
                      </span>
                      <div className="text-xs">Played</div>
                    </div>
                    <div className="flex flex-col bg-border/30 justify-center gap-2 items-center h-[100px]  w-[220px] border border-border rounded-md">
                      <span className="text-6xl font-semibold">
                        {JSON.parse(localStorage.getItem("wordleStats"))
                          ?.streak || 0}
                      </span>
                      <div className="text-xs">Win Streak</div>
                    </div>
                    <div className="flex flex-col bg-border/30 justify-center gap-2 items-center h-[100px] w-[220px] border border-border rounded-md">
                      <span className="text-6xl font-semibold">
                        {JSON.parse(localStorage.getItem("wordleStats"))
                          ?.total || 0}
                      </span>
                      <div className="text-xs">Total Wins</div>
                    </div>
                    <div className="flex flex-col bg-border/30 justify-center gap-2 items-center h-[100px]  w-[220px] border border-border rounded-md">
                      <span className="relative text-6xl font-semibold">
                        {Math.round(
                          parseFloat(
                            JSON.parse(localStorage.getItem("wordleStats"))
                              ?.percent
                          )
                        ) || 0}
                        <span className="absolute text-xl font-bold  right-[-20px] top-[20px]">
                          %
                        </span>
                      </span>
                      <div className="text-xs">Win Percentage</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={handleLearn}
                      className="w-full p-2 mt-8 text-sm text-center transition duration-100 ease-in border rounded-md hover:bg-border/50 bg-neutral-900 border-border "
                    >
                      Learn how to play?
                    </button>

                    <button
                      className="inline-flex items-center justify-center gap-2 p-2 transition duration-100 ease-in bg-indigo-600 border border-indigo-400 rounded-md hover:bg-indigo-600/90"
                      onClick={handleRestart}
                    >
                      <VscDebugRestart />
                      Play Again
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default StatsModal
