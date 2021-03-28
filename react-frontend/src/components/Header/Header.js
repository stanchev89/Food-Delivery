import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
	return (
		<article className="container-header">
			<article className="container-left">
				<Link to="/">
					<img src="foodDelivery-icon.png" alt="" className="logo" />
				</Link>
			</article>

			<article className="container-middle">
				<nav className="nav-bar">
					<ul>
						<li>
							<Link to="/">Обедно меню</Link>
						</li>
						<li>
							<Link to="/about">За нас</Link>
						</li>
						<li>
							<Link to="/terms">Условия</Link>
						</li>
						<li>
							<Link to="/news">Новини</Link>
						</li>
						<li>
							<Link to="contacts">Контакти</Link>
						</li>
					</ul>
				</nav>
			</article>

			<article className="container-right">
				<article className="user-bar">
					<ul>
						<li>
							<Link to="/profile">Профил</Link>
						</li>
						<li>
							<Link to="/cart">Количка</Link>
						</li>
						<li>
							<Link to="/login">Вход</Link>
						</li>
						<li>
							<Link to="/register">Регистрация</Link>
						</li>
						<li>
							<Link to="/logout">Изход</Link>
						</li>
					</ul>
				</article>
			</article>
		</article>
	);
}

export default Header;
