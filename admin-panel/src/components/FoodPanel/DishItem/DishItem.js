import './DishItem.css';
import * as foodService from '../../../services/foodService';

function DishItem({dish, toggleDishDailyMenu}) {
    function  onChangeMenuView() {
        toggleDishDailyMenu(dish);
    }


    return (
        <article className="dish-item">
            <article className="dish-item-header">
                <img src={dish?.img} alt="dish img"/>
            </article>
            <article className="dish-item-content">
                <h3 className="dish-item-title">{dish?.name}</h3>
                <h6 className="dish-item-category"><strong>Category:</strong> {dish?.category}</h6>
                <p className="dish-item-products"><strong>Products:</strong> {dish?.products.join(', ')}</p>
                <p className="dish-item-meatless"><strong>Meatless:</strong> {dish?.meatless.toString()}</p>
                <p className="dish-item-weight"><strong>Weight:</strong> {dish?.weight}</p>
                <p className="dish-item-price"><strong>Price:</strong> {Number(dish?.price).toFixed(2)}</p>
            </article>
            <article className="dish-item-buttons">
                {
                    dish?.daily_menu
                        ? <button className="remove-menu-btn" onClick={onChangeMenuView}>Remove from Daily Menu</button>
                        : <button className="add-to-menu-btn" onClick={onChangeMenuView}>Add to Daily Menu</button>
                }
                <button className="edit-dish-btn">Edit</button>
                <button className="delete-dish-btn">Delete</button>
            </article>
        </article>
    )
}

export default DishItem;