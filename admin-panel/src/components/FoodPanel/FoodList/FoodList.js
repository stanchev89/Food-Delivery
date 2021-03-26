import {Link, Route} from 'react-router-dom'
import {useEffect} from 'react';

function FoodList(props) {
    const dishes = props.dishes;
    console.log(dishes);
    const selectedMenu = props.match.path.includes('daily') ? dishes.dailyMenu : dishes.allDishes;
    console.log(selectedMenu)
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
                    selectedMenu?.length > 0 ?

                        < ul>
                            {
                                selectedMenu.map(dish => {
                                   return ( <li key={dish._id}>
                                        <p>{dish.name}</p>
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