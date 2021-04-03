import './Order.css';
import Cart from "../Cart/Cart";
import OrderAddress from "./OrderAddress/OrderAddress";
import OrderPayment from "./OrderPayment/OrderPayment";
import {useState,useEffect} from 'react'
import OrderDescription from "./OrderDescription/OrderDescription";
import environments from "../../environments";
import userService from "../../services/userService";

function Order({user, setUser, match,history,setNotification}) {
    const [order,setOrder] = useState({cart:user?.cart});
    const [delivery, setDelivery] = useState(undefined);

    useEffect(() => {
        if(Number(user?.cart?.totalPrice) >= 10) {
            setDelivery(0.5);
        }else {
            const deliveryPerRegion = Number(environments.regions[order?.address?.region]);
            setDelivery(deliveryPerRegion);
        }
    },[user?.cart?.totalPrice, order?.address])

    const onSubmitOrderHandler = () => {
        const orderId =
            Date.now().toString() +
            user._id
            .split('')
            .reverse()
            .splice(0,5)
            .join('');
        const newOrder = {
            cart:order?.cart?.products,
            address: {region:order?.address?.region, location: order?.address?.location},
            delivery: delivery,
            totalPrice:order?.cart?.totalPrice + delivery,
            description:order.description || '',
            payment: order?.payment,
            orderId: orderId
        };
        const validOrder = newOrder.cart && newOrder.address && newOrder.delivery && newOrder.totalPrice && newOrder.payment;
        if(validOrder) {
            userService.editUserData({order:newOrder})
                .then(user =>  {
                    user.cart = {};
                    setUser(user);
                    const notification = {
                        message:'Благодарим ви за поръчката!',
                        type: 'success'
                    }
                    setNotification(notification)
                })
                .then(() => history.push('/'))
                .catch(console.error);
        }else {
            const notification = {
                message: 'Моля, въведете адрес и начин на плащане!',
                type: 'error'
            }
            setNotification(notification)
        }

    }
    useEffect(() => {
        setOrder(prevState => ({...prevState, cart:user?.cart}))
    },[user?.cart?.products]);

    return (
        <section className="finish-order">
            <article className="finish-order-details">
                {
                    user?.cart?.products?.length > 0
                        ? <>
                            <Cart user={user} setUser={setUser} match={match}/>
                            <OrderAddress user={user} setUser={setUser} order={order} setOrder={setOrder} />
                            <OrderPayment order={order} setOrder={setOrder}/>
                            <OrderDescription order={order} setOrder={setOrder}/>
                        </>
                        : <p>Нямате добавени продукти в количката...</p>

                }
            </article>
            {
                user?.cart?.products?.length > 0
                ? <>
                        <article className="finish-order-summary">
                            {
                                delivery !== undefined
                                    ? <>
                                        <p>Доставка: <strong>{delivery.toFixed(2)}</strong> лв.</p>
                                        <p className="finish-order-summary-total-process">
                                            Крайна сума: <strong>{(Number(order?.cart?.totalPrice) + Number(delivery)).toFixed(2)} лв.</strong>
                                        </p>
                                    </>
                                    :null
                            }
                        </article>

                        <button className="finish-order-submit-btn" onClick={onSubmitOrderHandler}>
                            Потвърди поръчката
                        </button>
                    </>
                    : null
            }

        </section>

    )
}

export default Order;

// {
//     cart: [
//         {
//             name: types.String,
//             price: types.Number,
//             options: [
//                 {
//                     key: types.String,
//                     values: [ types.String ]
//                 }
//             ],
//             selected_options: [ types.String ],
//             quantity: {
//                 type: types.Number
//             }
//         }
//     ],
//         address: {
//     region:types.String,
//         location:types.String,
//         delivery:types.Number
// },
//     note: types.String,
//         totalPrice: types.Number
// }
