import environments from '../environments';
const foodApiMap = {
    dailyMenu: 'food/daily_menu',
    allDishes: 'food/all_dishes'
}

export const getAllDishes = (typeMenu) => {
    const fullPath = environments.apiUrl + foodApiMap[typeMenu];
    return fetch(fullPath).then(data => data.json()).catch(err => console.log(err));
}

export const addNewDish = (typeMenu,newDish) => {
    const fullPath = environments.apiUrl + foodApiMap[typeMenu];
    return fetch( {
        method: 'POST',
        headers: {
            'Content-Type': 'application-json'
        },
        body: JSON.stringify(newDish)
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err));

}