import environments from "../environments";
import {fetchWithCredentials} from "../helpers";

const userService = {

    login: ( username, password ) => {
        const fullPath = environments.apiURL + 'user/login';
        return fetchWithCredentials(fullPath,'POST',{username,password})
            .then(res => res.json())
            .catch(err => console.error(err))

    },
    register: (newUser) => {
        const fullPath = environments.apiURL + 'user/register';
        return fetchWithCredentials(fullPath,'POST',newUser)
            .then(res => res.json())
            .catch(err => console.error(err))

    },
    editUserData: (data) => {
        const fullPath = environments.apiURL + 'user/profile';
        return fetchWithCredentials(fullPath,'PUT',data)
            .then(res => res.json())
            .catch(console.error)
    },
    getUserInfo: () => {
        const fullPath = environments.apiURL + 'user/profile';
        return fetchWithCredentials(fullPath,'GET')
            .then(res => res.json())
            .catch(err => console.error(err));
    },
    logout: () => {
        const fullPath = environments.apiURL + 'user/logout';
        return fetchWithCredentials(fullPath,'POST')
            .then(res => res.json())
            .catch(console.error)
    }
};

export default userService;
