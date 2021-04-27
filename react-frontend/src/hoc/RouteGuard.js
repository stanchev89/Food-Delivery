import { Route, Redirect } from  "react-router-dom";
import {useContext} from 'react';
import UserContext from "../context/UserContext";
import {useLocation} from 'react-router-dom'

const RouteGuard = (props) => {
    const location = useLocation();
    const [user] = useContext(UserContext);
    const {path, exact=true, WrappedComponent, mustBeLoggedIn, redirectTo} = props;
    const condition = !!user === mustBeLoggedIn;

    return condition ? (<Route path={location.pathname} exact={exact} render={(props) => (
        <WrappedComponent {...props}/>
    )}/>) : (<Redirect to={redirectTo} exact/>)
};

export default RouteGuard;
