import './Header.css';
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <section className="header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhybuRdYhw1JXu7dHp3nNmG6mHoEi_yjsxQ&usqp=CAU" alt="Logo" />
            {
                props.admin
                    ? <ul className="list">
                        <li className="list-item">
                            <Link to="/food">
                                <p> Food </p>
                            </Link>
                        </li>
                        <li className="list-item">
                            <Link to="/user">
                                <p>Users</p>
                            </Link>
                        </li>
                    </ul>
                    : null
            }
            <article className="settings">
                    <i className="fas fa-cog"></i>
            </article>
        </section>
    );
}

export default Header;