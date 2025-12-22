export default function Header() {
  return (
    <header className="headerWrapper">
      <div className="topHeader">
        {/* Left: Logo image */}
        <div className="leftLogo">
          <img src="/Logo.png" alt="Company logo" className="logoImage" />
        </div>

        {/* Center: LOGO text */}
        <div className="centerLogo">LOGO</div>

        {/* Right: Icons + Language */}
        <div className="rightSection">
          <div className="iconSection">
            <img src="/search-normal.png" alt="Search" className="icon" />
            <img src="/profile.png" alt="User profile" className="icon" />
            <img src="/shopping-bag.png" alt="Shopping bag" className="icon" />
            <button className="langBtn">EN</button>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navBar">
        <a href="#">Shop</a>
        <a href="#">Skills</a>
        <a href="#">Contact Us</a>
        <a href="#">About Us</a>
      </nav>
    </header>
  );
}
