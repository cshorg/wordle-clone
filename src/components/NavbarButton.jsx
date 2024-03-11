import { Menu, Transition } from "@headlessui/react"
import { useContext } from "react"
import { MainContext } from "../context/MainContext"
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"

const NavbarButton = ({ icon, dropdown, onClick }) => {
  const { theme, setTheme } = useContext(MainContext)

  return (
    <Menu as="div" className="relative inline-block text-left">
      {dropdown ? (
        <Menu.Button
          onClick={onClick}
          className="flex items-center justify-center w-8 h-8 transition duration-100 ease-in bg-white border rounded-full dark:text-white hover:bg-neutral-100 border-neutral-300 text-neutral-600 dark:border-border dark:hover:bg-neutral-800 dark:bg-neutral-900/80"
        >
          {icon}
        </Menu.Button>
      ) : (
        <button
          onClick={onClick}
          className="flex items-center justify-center w-8 h-8 transition duration-100 ease-in bg-white border rounded-full dark:text-white hover:bg-neutral-100 border-neutral-300 text-neutral-600 dark:border-border dark:hover:bg-neutral-800 dark:bg-neutral-900/80"
        >
          {icon}
        </button>
      )}

      <Transition
        as="div"
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {dropdown && (
          <Menu.Items
            className="absolute right-0 px-2 py-2 cursor-pointer z-10 w-48 mt-[12px] text-sm origin-top-right border rounded-md shadow-lg border-neutral-200 dark:border-border text-neutral-900 dark:text-neutral-400 bg-white dark:bg-button/100 "
            as="div"
          >
            <Menu.Item>
              <div
                onClick={() => {
                  setTheme("")
                }}
                className={` w-full p-2 rounded hover:bg-neutral-200 dark:hover:bg-[#252429] flex items-center gap-2`}
              >
                <MdOutlineLightMode size={18} />
                Light
              </div>
            </Menu.Item>
            <Menu.Item>
              <div
                onClick={() => {
                  setTheme("dark")
                }}
                className={` w-full p-2 rounded hover:bg-neutral-200 dark:hover:bg-[#252429] flex items-center gap-2`}
              >
                <MdOutlineDarkMode size={18} />
                Dark
              </div>
              {/* className={` w-full p-2 rounded hover:bg-neutral-200 dark:hover:bg-[#252429] flex items-center gap-2`} */}
            </Menu.Item>
          </Menu.Items>
        )}
      </Transition>
    </Menu>
  )
}

export default NavbarButton
