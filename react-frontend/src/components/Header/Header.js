import "./Header.css";
import { Link } from "react-router-dom";
import {FaUser,FaShoppingCart} from 'react-icons/fa';
import {FiLogOut} from 'react-icons/fi';

function Header(props) {
	const {user} = props;
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
							<Link to="/posts">Мнения</Link>
						</li>
						<li>
							<Link to="contacts">Контакти</Link>
						</li>
					</ul>
				</nav>
			</article>

			<article className="container-right">
				<article className="user-bar">
					{
						user?.username
							? (
								<ul>
									<li>
										<Link to="/profile">
											<FaUser/>
										</Link>
									</li>
									<li>
										<Link to="/cart">
											<FaShoppingCart/>
										</Link>
									</li>
									<li>
										<Link to="/logout">
											<FiLogOut/>
										</Link>
									</li>
								</ul>
							)
							: (
								<ul>
									<li>
										<Link to="/login">Вход</Link>
									</li>
									<li>
										<Link to="/register">Регистрация</Link>
									</li>
								</ul>
							)
					}

				</article>
			</article>
		</article>
	);
}

export default Header;
