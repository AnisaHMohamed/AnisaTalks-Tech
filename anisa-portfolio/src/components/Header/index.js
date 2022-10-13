import "./style.css";

const Header = ({ top, activeTab }) => {
  
  return (
    <header style={top} className="App-header">
      <a className="logo" href="#" target="_blank" rel="noopener noreferrer">
        Anisa Talks Tech
      </a>
      <ul>
        <li>
          <a href="/" className={activeTab  == 'Home' ? 'active' : ''}>
            Home
          </a>
        </li>
        <li>
        <a href="/css" className={activeTab  == 'Css' ? 'active' : ''} >
        Css Library</a>
        </li>
        <li>
          <a href="#" className={activeTab  == 'Crow' ? 'active' : ''}>Crow Hunt</a>
        </li>
        <li>
          <a href="#" className={activeTab  == 'Crow' ? 'active' : ''}>Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
