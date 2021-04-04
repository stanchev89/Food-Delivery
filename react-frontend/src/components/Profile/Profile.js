import './Profile.css';
import {Link, Switch} from 'react-router-dom'

const Profile = ({match}) => {
    return (
        <section className="profile-header">
            <nav className="profile-header-nav">
                <Link to={match.url}>Моите данни</Link>
                <Link to={match.url + '/address'}>Моите адреси</Link>
                <Link to={match.url + '/orders'}>Моите порчки</Link>
            </nav>
        </section>
    )
};

export default Profile;
