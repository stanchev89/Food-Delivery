import './Order.css';
import Cart from "../Cart/Cart";
import OrderAddress from "./OrderAddress/OrderAddress";
import OrderPayment from "./OrderPayment/OrderPayment";
import {useState,useEffect} from 'react'
import OrderDescription from "./OrderDescription/OrderDescription";

function Order({user, setUser, match}) {
    const [order,setOrder] = useState({cart:user?.cart?.products});

    const onSubmitOrderHandler = () => {
        const newOrder = {};
        console.log(order)
    }
    useEffect(() => {
        setOrder(prevState => ({...prevState, cart:user?.cart?.products}))
    },[user?.cart?.products]);

    return (
        <section className="finish-order">
            <article className="finish-order-details">
                {
                    user?.cart?.products.length > 0
                        ? <>
                            <Cart user={user} setUser={setUser} match={match}/>
                            <OrderAddress user={user} setUser={setUser} order={order} setOrder={setOrder} />
                            <OrderPayment order={order} setOrder={setOrder}/>
                            <OrderDescription order={order} setOrder={setOrder}/>
                        </>
                        : <p>Нямате добавени продукти в количката...</p>

                }
            </article>

            <button className="finish-order-submit-btn" onClick={onSubmitOrderHandler}>
                Потвърди поръчката
            </button>
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