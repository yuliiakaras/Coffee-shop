import './footer.css'
import '../basic/reset.css'
import '../basic/basic.css'
import {Devider} from '../basic/elements'
const Footer = () => {
    return <footer>
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__icon">
                    <img src="./img/icons/coffee-black-outline.svg" alt="logo img"/></div>
                <div className="footer__links">

                    <ul className="footer__links-wrap">
                        <li>
                            <a href="#">Coffee house</a>
                        </li>
                        <li>
                            <a href="#">Our coffee</a>
                        </li>
                        <li>
                            <a href="#">For your pleasure</a>
                        </li>
                    </ul>
                </div>
                <Devider color='black'/>
            </div>
        </div>
    </footer>
}

export default Footer;