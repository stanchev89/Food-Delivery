import environments from '../environments';

export function getAllArchive() {
    return fetch(environments.apiUrl)
}