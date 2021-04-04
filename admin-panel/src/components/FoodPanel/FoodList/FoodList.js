import {Link} from 'react-router-dom';
import DishItem from '../DishItem';
import './FoodList.css';

function FoodList(props) {
    const dishes = props.dishes;
    return (
        <article className="food-list">
            <article className="food-list-header">

                <article className="add-wrapper">
                    <Link to='/food/add_new_dish'>
                        <i className="fas fa-plus fa-x5"> Add new dish</i>
                    </Link>
                </article>

            </article>

            <article className="food-list-content">
                {
                    dishes?.length > 0 ?

                        < ul className="food-list-ul">
                            {
                                dishes.map(dish => {
                                   return ( <li key={dish._id}>
                                           <DishItem updateDishes={props.updateDishes} dish={dish} history={props.history} toggleDishDailyMenu={props.toggleDishDailyMenu}/>
                                       </li>
                                   )
                                })
                            }
                        </ul>

                        : null
                }
            </article>


        </article>
    )
}

export default FoodList;