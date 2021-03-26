import environments from '../environments';
const foodApiMap = {
    dailyMenu: 'food/daily_menu',
    allDishes: 'food/'
}

export const getAllDishes = () => {
    const fullPath = environments.apiUrl + 'food/';
    return fetch(fullPath).then(data => data.json()).catch(err => console.log(err));
}

export const addNewDish = (typeMenu,newDish) => {
    const fullPath = environments.apiUrl + foodApiMap[typeMenu] + 'add_new_dish';
    const modifiedProducts = newDish.products.split(',').map(p => p.trim());
    newDish.products = modifiedProducts;
    console.log(JSON.stringify(newDish));
    return fetch( fullPath,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDish),
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err));

}