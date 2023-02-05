const Header = () => {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">Final Space</h1>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#characters">Characters</a>
            </li>
            <li className="vn">
              <a href="#audio">Voice Notes</a>
            </li>
            <li>
              <a href="#locations">Location</a>
            </li>
            <li>
              <a href="#quotes">Quotes</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
