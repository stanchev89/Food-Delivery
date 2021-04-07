import "./Footer.css";
import {Link} from 'react-router-dom'

function Footer(props) {
	return (
		<section className="footer">
            <nav className='footer-nav-bar'>

                <ul>
                    <li>
                        <Link to="/">Меню</Link>
                    </li>

                    <li>
                        <Link to="/about">За нас</Link>
                    </li>
                    <li>
                        <Link to="/conditions">Условия</Link>
                    </li>
                    <li>
                        <Link to="/posts">Мнения</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Контакти</Link>
                    </li>
                </ul>

            </nav>

            <article className="footer-icons">
                <img style={{height: 40}} src="https://shoplineimg.com/assets/footer/card_visa.png" alt="visa logo"/>
                <img style={{height: 40}}  src="https://shoplineimg.com/assets/footer/card_master.png" alt="mastercard logo"/>
                <img style={{height: 40}}  src="https://shoplineimg.com/assets/footer/card_paypal.png" alt="paypal logo"/>
            </article>

			<h5>Food Delivery &copy; 2021</h5>
		</section>
	);
}

export default Footer;
