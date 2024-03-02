import { Menu, Transition } from "@headlessui/react"

const NavbarButton = ({ icon, dropdown, items }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center justify-center transition duration-100 ease-in border rounded-full w-9 h-9 border-border hover:bg-neutral-800 bg-neutral-900/80">
        {icon}
      </Menu.Button>
      <Transition
        as="Fragment"
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {dropdown && (
          <Menu.Items
            className="absolute right-0 px-2 py-2 cursor-pointer z-10 w-48 mt-[12px] text-sm origin-top-right border rounded-md shadow-lg border-border text-neutral-400 bg-button "
            as="Div"
          >
            {items.map((item, i) => {
              const selected = item.includes("Dark") ? "text-indigo-400" : ""

              return (
                <Menu.Item
                  className={` ${selected} w-full p-2 rounded hover:bg-[#252429] flex items-center gap-2`}
                  as="Div"
                  key={i}
                >
                  {item}
                </Menu.Item>
              )
            })}
          </Menu.Items>
        )}
      </Transition>
    </Menu>
  )
}

export default NavbarButton
