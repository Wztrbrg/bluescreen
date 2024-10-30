import '../assets/style/header.scss';
import SiteLogo from '../assets/images/site-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="top-nav">
      <nav>
        <Link className='site-logo-container' to={"/"}>
          <img src={ SiteLogo } alt="Bluescreens logotyp" />
          <p className='nav-txt dk-txt'>BLUESCREEN</p>
        </Link>
      </nav>
    </header>
  )
}
export default Header;