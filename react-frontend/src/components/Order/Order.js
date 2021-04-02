import './Order.css';
import Cart from "../Cart/Cart";
import OrderAddress from "./OrderAddress/OrderAddress";
import OrderPayment from "./OrderPayment/OrderPayment";
import {useState,useEffect} from 'react'
import userService from "../../services/userService";

function Order({user, setUser, match}) {
    const [order,setOrder] = useState({cart:[]});
    useEffect(() => {
        setOrder(prevState => ({...prevState, cart:user?.cart?.products}))
    },[])

    return (
        <section className="finish-order">
            {
                user?.cart?.products.length > 0
                    ? <>
                        <Cart user={user} setUser={setUser} match={match}/>
                        <OrderAddress user={user} setUser={setUser} order={order} setOrder={setOrder} />
                        <OrderPayment order={order} setOrder={setOrder}/>
                    </>
                    : <p>Нямате добавени продукти в количката...</p>

            }
        </section>
    )
}

export default Order;