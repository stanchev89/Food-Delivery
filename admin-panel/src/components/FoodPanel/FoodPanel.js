import {Link, Switch, Route} from 'react-router-dom';
import {useState, useEffect} from 'react'
import FoodList from './FoodList';
import AddNewDish from './AddNewDish';
import './FoodPanel.css';
import * as foodService from '../../services/foodService';

const initailDishes = {
    dailyMenu: [],
    allDishes: []
}

function FoodPanel(props) {
    const [dishes, setDishes] = useState(initailDishes);

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
            {
                dishes.dailyMenu.length > 0
                    ? dishes.dailyMenu.map(d => {
                        return (
                            <h1 key={d._id}>{d.name}</h1>
                        )
                    })
                    : null

            }
            <Switch>

                <Route path='/food/daily-menu'
                       render={(props) => (
                           <FoodList {...props} dishes={dishes}/>
                       )}
                />
                <Route path="/food/add_new_dish"
                       render={(props) => (
                           <AddNewDish {...props}/>
                       )}
                />

                <Route path='/food'
                       render={(props) => (
                           <FoodList {...props} dishes={dishes}/>
                       )}
                />
            </Switch>
        </section>
    )
}

export default FoodPanel;