import {Link} from 'react-router-dom'
function UserPanel(props) {
    return(
        <ul>
            <li>
                <Link to="/all-users">
                    <p>All Users</p>
                </Link>
            </li>
        </ul>
    )
}

export default UserPanel;