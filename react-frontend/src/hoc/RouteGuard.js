import { Route, Redirect } from  "react-router-dom";
import {useContext} from 'react';
import UserContext from "../context/UserContext";

const RouteGuard = (...guardProps) => {
    const [user] = useContext(UserContext);
    const {component,mustBeLoggedIn, ...props} = guardProps;
    const condition = !!user === mustBeLoggedIn;

};

export default RouteGuard;
