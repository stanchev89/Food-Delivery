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
                        <i className="fas fa-plus fa-x5"></i>
                    </Link>
                </article>

            </article>

            <article className="food-list-content">
                {
                    dishes?.length > 0 ?

                        < ul className="food-list">
                            {
                                dishes.map(dish => {
                                   return ( <li key={dish._id}>
                                           <DishItem dish={dish} toggleDishDailyMenu={props.toggleDishDailyMenu}/>
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