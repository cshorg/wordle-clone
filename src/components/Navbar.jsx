import NavbarButton from "./NavbarButton"
import { BiStats } from "react-icons/bi"
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"
import { BsQuestion } from "react-icons/bs"
import { RiComputerLine } from "react-icons/ri"

const Navbar = () => {
  return (
    <nav className="h-[56px] w-screen bg-button fixed top-0 backdrop-blur border-b border-border">
      <div className="flex items-center justify-between h-full px-4 md:px-10">
        <div className="font-bold tracking-tighter text-[18px] md:text-[22px]">
          Wordle clone
        </div>
        <div className="flex gap-2 md:gap-3">
          <NavbarButton icon={<BiStats size={20} />} />
          <NavbarButton icon={<BsQuestion size={22} />} />
          <NavbarButton
            icon={<MdOutlineDarkMode size={18} />}
            dropdown={true}
            items={[
              [<MdOutlineLightMode size={18} />, "Light"],
              [<MdOutlineDarkMode size={18} />, "Dark"],
              [<RiComputerLine size={18} />, "System"]
            ]}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar