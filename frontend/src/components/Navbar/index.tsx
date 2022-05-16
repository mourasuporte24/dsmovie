import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './style.css';
function Navbar(){
    return (

        <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h2>...Navi Flix...</h2>
         
                 
         
          <a href="https://github.com/mourasuporte24">
            <div className="dsmovie-contact-contain">
              <GithubIcon />
              <p className="dsmovie-contact-link"> Adenilson Moura</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
    );
}
export default Navbar;