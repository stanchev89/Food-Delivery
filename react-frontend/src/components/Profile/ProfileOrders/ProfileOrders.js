import './ProfileOrders.css';
import {IoMdSearch} from 'react-icons/io';
import {useState} from 'react'
import ShowOrderCart from './ShowOrderCart/ShowOrderCart';
import {useContext} from 'react'
import UserContext from "../../../context/UserContext";
function ProfileOrders(){
    const [user] = useContext(UserContext);

    const[showCart,setShowCart] = useState(false);
    const[currentOrder,setCurrentOrder] = useState(undefined);

    function parseDateTime(s) {
        const b = s.split(/\D/);
        return new Date(b[0],b[1]-1,b[2],b[3],b[4],b[5])
    }

    const toggleShowCart = (order) => {
        if(!order) {
             setShowCart(prev => !prev);
             setCurrentOrder(prev => undefined);
             return;
        }
        setShowCart(prev => !prev);
        setCurrentOrder(prev => order);
    };


    return (
        <article className="profile-orders">
            {
                user?.orders.length === 0
                    ? <p>Все още нямате направени поръчки...</p>
                    :  <table className="order-table">
                        <thead>
                        <tr>
                            <th>Дата</th>
                            <th>Адрес</th>
                            <th>Плащане</th>
                            <th>Крайна цена</th>
                            <th>Продукти</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            user?.orders.sort((a,b) => Date.parse(parseDateTime(b.date)) - Date.parse(parseDateTime(a.date))
                            ).map(order => (
                                <tr key={order._id}>
                                    <td>{order.date}</td>
                                    <td>{order.address.location}</td>
                                    <td>{order.payment}</td>
                                    <td>{Number(order.totalPrice).toFixed(2)} лв.</td>
                                    <td><IoMdSearch
                                        className="magnifier"
                                        onClick={toggleShowCart.bind(null,order)}
                                        disabled={showCart}
                                    />
                                    </td>
                                </tr>
                            ))

                        }
                        </tbody>
                    </table>
            }
            {
                showCart
                    ? <ShowOrderCart order={currentOrder} closeHandler={toggleShowCart}/>
                    : null
            }
        </article>
    )
}
export default ProfileOrders;
