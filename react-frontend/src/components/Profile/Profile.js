import './Profile.css';
import {Link, NavLink, Route, Switch} from 'react-router-dom'
import {FaUser} from 'react-icons/fa';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileAddress from "./ProfileAddress/ProfileAddress";


const Profile = ({user, setUser, match, setNotification}) => {
    return (
        <section className="profile">
            <section className="profile-header">
                <nav className="profile-header-nav">
                    <NavLink
                        to={match.url}
                        exact
                        activeClassName="is-active">
                        Моите данни
                    </NavLink>
                    <NavLink
                        to={match.url + '/address'}
                        exact
                        activeClassName="is-active">
                        Моите адреси
                    </NavLink>
                    <NavLink
                        to={match.url + '/orders'}
                        exact
                        activeClassName="is-active">
                        Моите адреси
                    </NavLink>
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
                    <Route path="/profile/address" exact render={(props) => (
                        <ProfileAddress {...props}
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
