import userService from "../../services/userService";
import {useContext} from 'react'
import UserContext from "../../context/UserContext";

export default ({history}) => {
    const [_, setUser] = useContext(UserContext);
    userService.logout()
        .then(() => {
            setUser(undefined);
            history.push('/')
        })
        .catch(console.error)

    return (
        null
    )
}
