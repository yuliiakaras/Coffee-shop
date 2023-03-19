import './header.css';
import {Devider} from '../basic/elements';
const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark mynav">
                <div className="container">
                    <a className="navbar-brand" href="./header.js">
                        <img src="./img/icons/coffee-white.png" alt="logo img" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="custom-link" aria-current="page" href="./index.html">Coffee house</a>
                            </li>
                            <li className="nav-item">
                                <a href="./about.html" className="custom-link">Our coffee</a>
                            </li>
                            <li className="nav-item">
                                <a href="./pleasure.html" className="custom-link">For your pleasure</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <section className="greeting">
                <div className="container">
                    <div className="greeting__wrapper">
                        <h1 className="greeting__title">Everything You Love About Coffee</h1>
                        <Devider color="white"/>
                        <div className="greeting__description">
                            We makes every day full of energy and taste Want to try our beans?
                        </div>
                        <div className="button__wrapper">
                            <button type="button" className="btn btn-outline-light">More</button>
                        </div>
                    </div>
                </div>
            </section>
            
        </header>
    )
}

export default Header;