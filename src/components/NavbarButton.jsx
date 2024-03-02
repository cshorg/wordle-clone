const NavbarButton = ({ icon }) => {
  return (
    <button className="flex items-center justify-center transition duration-100 ease-in border rounded-full w-9 h-9 border-border hover:bg-neutral-800 bg-neutral-900/80">
      {icon}
    </button>
  )
}

export default NavbarButton
