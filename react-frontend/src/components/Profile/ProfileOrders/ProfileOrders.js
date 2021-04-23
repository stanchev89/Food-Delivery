import './ProfileOrders.css';
import {IoMdSearch} from 'react-icons/io';
import {useContext, useState,useEffect} from 'react'
import ShowOrderCart from './ShowOrderCart/ShowOrderCart';
import UserContext from "../../../context/UserContext";
import userService from "../../../services/userService";

function ProfileOrders() {
    const [user] = useContext(UserContext);

    const [showCart, setShowCart] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(undefined);
    const [userOrders, setUserOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState([]);
    const [showPerPage, setShowPerPage] = useState(10);

    useEffect(() => {
        const data = {
            userId: user._id,
            skip: 0,
            limit: showPerPage
        }
        userService.getUserOrders(data)
            .then (([orders,count]) => {
                setTotalPages(() => {
                   const pages =  Math.ceil(Number(count) / showPerPage);
                   const totalPagesArr = [];
                   for(let i = 1; i <= pages; i ++) {
                       totalPagesArr.push(i);
                   }
                   return totalPagesArr;
                });
                setUserOrders(() => orders.sort((a,b) => parseDateTime(b.date) - parseDateTime(a.date)));
            })
            .catch(console.error);
    },[]);

    function parseDateTime(s) {
        const b = s.split(/\D/);
        return new Date(b[0], b[1] - 1, b[2], b[3], b[4], b[5])
    }

    const toggleShowCart = (order) => {
        if (!order) {
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
                userOrders?.length === 0
                    ? <p>Все още нямате направени поръчки...</p>
                    : <>
                        <table className="order-table">
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
                                userOrders?.map(order => (
                                    <tr key={order._id}>
                                        <td>{order.date}</td>
                                        <td>{order.address.location}</td>
                                        <td>{order.payment}</td>
                                        <td>{Number(order.totalPrice).toFixed(2)} лв.</td>
                                        <td><IoMdSearch
                                            className="magnifier"
                                            onClick={toggleShowCart.bind(null, order)}
                                            disabled={showCart}
                                        />
                                        </td>
                                    </tr>
                                ))

                            }
                            </tbody>
                        </table>
                        <nav className="table-pages">
                            <ul>
                                {
                                    totalPages.map(page => (
                                        <li key={page}> {page}</li>
                                    ))
                                }
                            </ul>
                            <p>Покажи</p>
                            <select name="show-per-page" id="show-per-page">
                                <option value="10">10</option>
                                <option value="20">15</option>
                                <option value="20">20</option>
                            </select>
                        </nav>
                    </>
            }
            {
                showCart
                    ? <ShowOrderCart order={currentOrder} closeHandler={toggleShowCart}/>
                    : null
            }
        </article>
    )
};
export default ProfileOrders;
