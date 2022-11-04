import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header({ loggedIn }) {
  return (
    <header className='header'>
      <Link to='/'>
        <Logo />
      </Link>
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
