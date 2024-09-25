const Header = () => {
  return (
    <header className="fixed top-0 z-50 w- full py-10">
        <div className="container flex h-14  items-center max-lg:px-5">
            <a className="lg:hidden flex-1 cursor-pointer z-2">
                <img src="./images/svg/xora.svg" width={155} height={55} alt="logo" />
            </a>
            <div className="w-full border-2 border-amber-400">

            </div>
        </div>
    </header>
  )
}

export default Header