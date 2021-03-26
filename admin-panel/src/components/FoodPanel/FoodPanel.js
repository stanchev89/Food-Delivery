import {Switch, Route} from 'react-router-dom';
import {useState, useEffect} from 'react'
import FoodList from './FoodList';
import AddNewDish from './AddNewDish';
import './FoodPanel.css';
import * as foodService from '../../services/foodService';

const initailDishes = {
    allDishes: []
}

function FoodPanel(props) {
    const [dishes, setDishes] = useState(initailDishes);
    const getDailyMenu = () => {
        return dishes.allDishes.filter(d => d.daily_menu === true);
    }
    const toggleDishDailyMenu = (dish) => {
        dish.daily_menu = !dish.daily_menu;
        foodService.editDish(dish._id, dish)
            .then(() => {
                setDishes((prevState) => (
                    {
                        ...prevState
                    }
                ));
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        props.setAsideOptions(options);
        foodService.getAllDishes()
            .then(res => {
                setDishes((prevState) => (
                    {
                        ...prevState,
                        allDishes: res
                    }
                ))
                return res;
            })
            .catch(err => console.log(err));

        return () => {
            props.setAsideOptions(null);
        }
    }, []);

    const options = {
        'All Dishes': '/food',
        'Daily Menu': '/food/daily-menu'
    }

    return (

        <section className="container">
            <Switch>

                <Route path='/food/daily-menu'
                       render={(props) => (
                           <FoodList {...props} toggleDishDailyMenu={toggleDishDailyMenu} dishes={getDailyMenu()}/>
                       )}
                />
                <Route path="/food/add_new_dish"
                       render={(props) => (
                           <AddNewDish {...props}/>
                       )}
                />

                <Route path='/food'
                       render={(props) => (
                           <FoodList {...props} toggleDishDailyMenu={toggleDishDailyMenu} dishes={dishes.allDishes}/>
                       )}
                />
            </Switch>
        </section>
    )
}

export default FoodPanel;