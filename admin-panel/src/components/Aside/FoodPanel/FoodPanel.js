import {Link} from 'react-router-dom';
function FoodPanel() {
    return (
        <ul>
            <li>
                <Link to='/food/dishes'>
                    <p>All Dishes</p>
                </Link>
            </li>
            <li>
                <Link to='/food/daily-menu'>
                    <p>Daily Menu</p>
                </Link>
            </li>
        </ul>
    )
}

export default FoodPanel;