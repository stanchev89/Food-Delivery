import './Profile.css';
import {Link, Route, Switch} from 'react-router-dom'
import {FaUser} from 'react-icons/fa';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({user, setUser, match, setNotification}) => {
    return (
        <section className="profile">
            <section className="profile-header">
                <nav className="profile-header-nav">
                    <Link to={match.url}>Моите данни</Link>
                    <Link to={match.url + '/address'}>Моите адреси</Link>
                    <Link to={match.url + '/orders'}>Моите порчки</Link>
                </nav>
            </section>

            <section className="profile-content">
                <article className="profile-icon-wrapper">
                    <FaUser/>
                </article>
                <Switch>
                    <Route path="/profile" exact render={(props) => (
                        <ProfileInfo {...props}
                                     user={user}
                                     setUser={setUser}
                                     setNotification={setNotification}
                        />
                    )}/>
                </Switch>
            </section>
        </section>


    )
};

export default Profile;
