import { useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react'
import FoodList from './FoodList';
import AddNewDish from './AddNewDish';
import './FoodPanel.css';
function FoodPanel(props) {

    useEffect(() => {
        props.setAsideOptions(options);
        return () => {
            props.setAsideOptions(null);
        }
    }, []);

    const options = {
        'All Dishes': '/food/dishes',
        'Daily Menu': '/food/daily-menu'
    }
    
    return (
        <article className="container">
                <Switch>
                    <Route path='/food/dishes'
                        render={(props) => (
                            <FoodList {...props} dishes={props.allDishes} />
                        )}
                    />
                    <Route path='/food/daily-menu'
                        render={(props) => (
                            <FoodList {...props} dishes={props.dailyMenu} />
                        )}
                    />
                    <Route path="/food/add-new-dish"
                        render={(props) => (
                            <AddNewDish {...props}/>
                        )}
                    />
                </Switch>
        </article>
    )
}

export default FoodPanel;