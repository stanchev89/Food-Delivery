import './Header.css';
function Header(props) {
    return (
        <section className="header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhybuRdYhw1JXu7dHp3nNmG6mHoEi_yjsxQ&usqp=CAU" alt="Logo" />
            {
                props.admin
                    ? <ul className="list">
                        <li className="list-item">
                            <a href="">Food</a>
                        </li>
                        <li className="list-item">
                            <a href="">Users</a>
                        </li>
                    </ul>
                    : null
            }
            <article className="settings">
                <a href="">
                    <i class="fas fa-cog"></i>
                </a>
            </article>
        </section>
    );
}

export default Header;