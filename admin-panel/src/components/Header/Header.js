import './Header.css';
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <section className="header">
            <Link to='/'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhybuRdYhw1JXu7dHp3nNmG6mHoEi_yjsxQ&usqp=CAU" alt="Logo" />
            </Link>
            {
                props.admin
                    ? <ul className="list">
                        <li className="list-item" id="food-head">
                            <Link to="/food">
                                <p> Food </p>
                            </Link>
                        </li>
                        <li className="list-item" id="user-head">
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