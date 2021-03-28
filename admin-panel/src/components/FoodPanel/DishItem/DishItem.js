import './DishItem.css';
import {IoIosArrowDropdown, IoIosArrowDropup} from 'react-icons/io';
import {useState} from 'react';
import * as foodService from '../../../services/foodService';

function DishItem({dish, toggleDishDailyMenu, history,updateDishes}) {
    const [showDetails, toggleDetails] = useState(false)

    function onChangeMenuView() {
        toggleDishDailyMenu(dish);
    }

    const toggleShowDetails = () => {
        toggleDetails(() => !showDetails);
    }

    const editCurrentDishHandler = () => {
        history.push(`food/${dish._id}/edit`)
    }
    const deleteDish = () => {
        foodService.deleteDish(dish._id)
            .then(res => {
                updateDishes();
                history.push('/food');
            }).catch(err => console.error(err));
    }


    return (
        <article className="dish-item">
            <article className="dish-item-header">
                <img src={dish?.img} alt="dish img"/>
                <h3 className="dish-item-title">{dish?.name}</h3>
                {
                    !showDetails &&  <IoIosArrowDropup onClick={toggleShowDetails}/>
                }

            </article>
            {
                showDetails
                    ?
                    <article className="dish-item-content">
                        <IoIosArrowDropdown onClick={toggleShowDetails}/>
                        <h6 className="dish-item-category"><strong>Category:</strong> {dish?.category}</h6>
                        <p className="dish-item-products"><strong>Products:</strong> {dish?.products.join(', ')}</p>
                        <p className="dish-item-meatless"><strong>Meatless:</strong> {dish?.meatless.toString()}</p>
                        <p className="dish-item-weight"><strong>Weight:</strong> {dish?.weight}</p>
                        <p className="dish-item-price"><strong>Price:</strong> {Number(dish?.price).toFixed(2)}</p>
                    </article>
                    : null
            }
            <article className="dish-item-buttons">
                {
                    dish?.daily_menu
                        ? <button className="remove-menu-btn" onClick={onChangeMenuView}>Remove from Daily Menu</button>
                        : <button className="add-to-menu-btn" onClick={onChangeMenuView}>Add to Daily Menu</button>
                }
                <button className="edit-dish-btn" onClick={editCurrentDishHandler}>Edit</button>
                <button className="delete-dish-btn" onClick={deleteDish}>Delete</button>
            </article>
        </article>
    )
}

export default DishItem;