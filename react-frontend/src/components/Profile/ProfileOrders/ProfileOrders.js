import './ProfileOrders.css';
import {IoIosArrowBack, IoIosArrowForward, IoMdSearch} from 'react-icons/io';
import {useContext, useEffect, useState} from 'react'
import ShowOrderCart from './ShowOrderCart/ShowOrderCart';
import UserContext from "../../../context/UserContext";
import userService from "../../../services/userService";

function ProfileOrders() {
    const [user] = useContext(UserContext);

    const [showCart, setShowCart] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(undefined);
    const [userOrders, setUserOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState([1,2,3,4,5,6,7,8,9,10]);
    const [showPerPage, setShowPerPage] = useState(10);


    useEffect(() => {
        const data = {
            userId: user._id,
            skip: 0,
            limit: showPerPage
        };
        userService.getUserOrders(data)
            .then(([orders, count]) => {
                setTotalPages(() => {
                    const pages = Math.ceil(Number(count) / showPerPage);
                    const totalPagesArr = [];
                    for (let i = 1; i <= pages; i++) {
                        totalPagesArr.push(i);
                    }
                    return totalPagesArr;
                });
                setUserOrders(() => orders.sort((a, b) => parseDateTime(b.date) - parseDateTime(a.date)));
            })
            .catch(console.error);
    }, []);

    useEffect(() => {
        const data = {
            userId: user._id,
            skip: (currentPage - 1) * showPerPage,
            limit: showPerPage
        };
        userService.getUserOrders(data)
            .then(([orders, count]) => {
                setTotalPages(() => {
                    const pages = Math.ceil(Number(count) / showPerPage);
                    const totalPagesArr = [];
                    for (let i = 1; i <= pages; i++) {
                        totalPagesArr.push(i);
                    }
                    return totalPagesArr;
                });
                // setUserOrders(() => orders.sort((a, b) => parseDateTime(b.date) - parseDateTime(a.date)));
                setUserOrders(() => orders);

            })
            .catch(console.error);

    }, [currentPage, showPerPage])

    function parseDateTime(s) {
        const b = s.split(/\D/);
        return new Date(b[0], b[1] - 1, b[2], b[3], b[4], b[5])
    }

    const onChangePageHandler = (e) => {
        e.preventDefault();
        const text = e.target.textContent;
        const toPage = Number(text);
        if (!text) {
            console.log(e.target.className?.baseVal)
            e.target.className?.baseVal === 'next'
                ? setCurrentPage(prev => prev + 1 <= totalPages.length ? prev + 1 : prev)
                : setCurrentPage(prev => prev - 1 >= 1 ? prev - 1 : prev);
            return;
        }
        ;
        setCurrentPage(() => Number(toPage));
    };

    const onChangeViewPerPageHandler = (e) => {
        const selected = Number(e.target.value);
        setShowPerPage(prev => {
            if(selected == prev) {
                return;
            }
            return selected;
        })
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
                        {
                            totalPages.length > 1
                                ? <nav className="table-pages">
                                    <ul>
                                        <li>
                                            <IoIosArrowBack
                                                className="back"
                                                onClick={onChangePageHandler}
                                            />
                                        </li>
                                        {
                                            totalPages.map(page => (
                                                <li key={page}
                                                    className={currentPage == page ? 'is-active' : ''}
                                                    name={page}
                                                    onClick={onChangePageHandler}
                                                >
                                                    {page}
                                                </li>
                                            ))
                                        }
                                        <li>
                                            <IoIosArrowForward
                                                className="next" onClick={onChangePageHandler}
                                            />
                                        </li>
                                    </ul>
                                    <article className="show-per-page-wrapper">
                                        <label className="show-per-page-title">Покажи</label>
                                        <select name="show-per-page" id="show-per-page" onChange={onChangeViewPerPageHandler}>
                                            <option value="10">10</option>
                                            <option value="15">15</option>
                                            <option value="20">20</option>
                                        </select>
                                    </article>

                                </nav>
                                : null
                        }
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
