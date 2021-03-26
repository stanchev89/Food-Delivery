import environments from '../environments';
const foodApi = environments.apiUrl + 'food/';

export const getAllDishes = () => {
    return fetch(foodApi).then(data => data.json()).catch(err => console.error(err));
}

export const addNewDish = (newDish) => {
    const fullPath = foodApi + 'add_new_dish';
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
    .then(res => console.log(res))
    .catch(err => console.error(err));
}

export const editDish = (id,editedDish) => {
    const fullPath = foodApi + 'dish/' + id;
    return fetch(fullPath, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedDish)
    })
        .then(res => console.log(res))
        .catch(err => console.error(err))
}