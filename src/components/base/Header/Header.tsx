const Header = () => {
  return (
    <header>
      <div className="bg-neutral-800">
        <div className="container text-white">
          <a href="#">SIGN IN</a>

          <span>|</span>

          <a href="#">JOIN US</a>
        </div>
      </div>

      <div className="bg-white">
        <div className="container">
          <div className="flex justify-between">
            <a href="#" className="p-4">
              <h1>JAVELIN</h1>
            </a>

            <nav className="flex flex-1 place-content-evenly">
              <a href="#" className="p-4">
                GAMING GEAR
              </a>

              <a href="#" className="p-4">
                STREAMING GEAR
              </a>

              <a href="#" className="p-4">
                PC COMPONENTS
              </a>

              <a href="#" className="p-4">
                GAMING PCs
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
