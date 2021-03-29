import environments from "../environments";

const initialCart = {
    products: [],
    totalPrice: 0
};
const initialUser = {
    username: 'stanchev89',
    password: '123123',
    address: [{location: 'Varna,Lyuben Karavelov 50, ap 8', delivery: 1.5}, {
        location: 'Smolyan, ul. Chan 3, ap 43',
        delivery: 0.5
    }],
    phone: '+359876969696',
    email: 'stanchev89@abv.bg',
    orders: [],
    cart: initialCart
};
const userService = {
    getDemoUser: () => {
        return Promise.resolve(initialUser);
    }
};

export default userService;
