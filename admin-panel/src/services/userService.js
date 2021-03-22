import environments from '../environments';

export const getAllUsers = () => {
    const fullPath = environments.apiUrl + 'all_users';
    return fetch(fullPath).then(data => data.json()).catch(err => console.log(err));
}

export const getProfileInfo = () => {
    const fullPath = environments.apiUrl + 'profile';
    return fetch(fullPath).then(data => data.json()).catch(err => console.log(err));
}

