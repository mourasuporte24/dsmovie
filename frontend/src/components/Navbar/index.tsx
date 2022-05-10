import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './style.css';
function Navbar(){
    return (

        <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DsMovie</h1>
          <a href="https://github.com/mourasuporte24">
            <div className="dsmovie-contact-contain">
              <GithubIcon />
              <p className="dsmovie-contact-link">Contech Sistemas </p>
            </div>
          </a>
        </div>
      </nav>
    </header>
    );
}
export default Navbar;