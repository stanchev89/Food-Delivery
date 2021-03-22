import { Link, Route } from 'react-router-dom'
import AddNewDish from '../AddNewDish';

function FoodList(props) {
    const dishes = props.dishes;
    return (
        <article className="food-list">
            <article className="food-list-header">
                {
                    props.location.pathname.includes('dishes')
                        ? <article className="add-wrapper">
                            <Link to='/food/add-new-dish'>
                                <i className="fas fa-plus fa-x5"></i>
                            </Link>
                        </article>
                        : <h1> List </h1>
                }
            </article>

            <article className="food-list-content">
                {
                    dishes ?

                        < ul >
                            {
                                dishes.map(dish => {
                                    <li key={dish.id}>{dish.name}</li>
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