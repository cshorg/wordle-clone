import { Fragment, useContext } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { IoCloseSharp } from "react-icons/io5"
import { MainContext } from "../context/MainContext"

const HelpModal = () => {
  const { helpModal, setHelpModal } = useContext(MainContext)

  return (
    <Transition.Root show={helpModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setHelpModal(false)}
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
                <div className="mb-4 text-white">
                  <div className="flex justify-end w-full ">
                    <div
                      className="cursor-pointer hover:opacity-80"
                      onClick={() => setHelpModal(false)}
                    >
                      <IoCloseSharp size={28} />
                    </div>
                  </div>
                  <h1 className="text-xl font-semibold text-center uppercase ">
                    How to Play
                  </h1>

                  <ul className="flex flex-col gap-2 px-6 mt-4 list-decimal">
                    <li className="p-1 ">
                      Each guess must be a valid 5 letter word.
                    </li>
                    <li className="p-1 ">
                      The color of the tiles will change to show if your guess
                      was correct or not.
                    </li>
                    <li className="p-1 ">
                      <p className="ml-1">Check the tiles:</p>
                      <ul className="ml-6 list-disc">
                        <li>
                          <a className="text-green-400">Green</a> - Correct
                          letter in the correct position.
                        </li>
                        <li>
                          <a className="text-yellow-400">Yellow</a> - Correct
                          letter, but in the wrong position.
                        </li>
                        <li>
                          <a className="text-neutral-500">Grey</a> - Incorrect
                          letter.
                        </li>
                      </ul>
                    </li>
                    <li className="p-1 ">
                      You have 6 attempts to guess the hidden word.
                    </li>
                    <li className="p-1 ">
                      Restarting the game will reset your guesses and the secret
                      word, counting as a loss.
                    </li>
                    <li>Goodluck and have fun!</li>
                  </ul>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default HelpModal
