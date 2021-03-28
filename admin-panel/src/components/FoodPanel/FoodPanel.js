import {Switch, Route} from 'react-router-dom';
import {useState, useEffect} from 'react'
import FoodList from './FoodList';
import DishForm from './DishForm';
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

    const updateDishes = (newDishes) => {
        if (newDishes) {
            setDishes((prevState) => (
                {
                    ...prevState,
                    allDishes: newDishes
                }
            ))
            return Promise.resolve(dishes)
        }
        return foodService.getAllDishes()
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
    }
    const setAsideOptions = props.setAsideOptions;
    useEffect(() => {
        updateDishes()
            .then(() => {
                setAsideOptions(options);
            })
            .catch(err => console.error(err));
        return () => {
            setAsideOptions(null);
        }
    }, []);

    const getDishById = (id) => {
        if (id) {
            if (dishes.allDishes.length === 0) {
                console.log(dishes.allDishes.length)
                updateDishes().then((data) => {
                    return data.find(d => d._id === id);
                }).catch(err => console.error(err))
            }else {
                return dishes.allDishes.find(d => d._id === id);
            }
        }
    }

    const options = {
        'All Dishes': '/food',
        'Daily Menu': '/food/daily-menu'
    }

    return (

        <section className="container">
            <Switch>

                <Route path='/food/daily-menu'
                       render={(props) => (
                           <FoodList {...props} updateDishes={updateDishes} toggleDishDailyMenu={toggleDishDailyMenu} dishes={getDailyMenu()}/>
                       )}
                />
                <Route path="/food/add_new_dish"
                       render={(props) => (
                           <DishForm {...props} updateDishes={updateDishes}/>
                       )}
                />
                <Route path='/food/:id/edit'
                       render={(props) => (
                           <DishForm {...props} updateDishes={updateDishes}
                                     editDish={getDishById}/>
                       )}
                />
                <Route path='/food'
                       render={(props) => (
                           <FoodList {...props} updateDishes={updateDishes} toggleDishDailyMenu={toggleDishDailyMenu} dishes={dishes.allDishes}/>
                       )}
                />
            </Switch>
        </section>
    )
}

export default FoodPanel;