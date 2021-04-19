import {useState} from 'react';
import './DishForm.css'
import DishOptions from './DishOptions';
import SavedOptions from './SavedOptions';
import * as foodService from '../../../services/foodService';


function DishForm(props) {
    const initialDish = {
        name: '', products: '', meatless: false, category: '', price: 0,
        weight: 0, img: '', options: {}, _editing_options: {}
    }
    const editDish = props.editDish ? props.editDish(props.match.params.id) : null;
    if(editDish) {
        editDish._editing_options = {};
        if(!editDish.hasOwnProperty('options')) {
            editDish.options = {};
        }
    }
    const [newDish, setNewDish] = useState(editDish ? editDish : initialDish);

    const onSubmit = (event) => {
        event.preventDefault();
        props.editDish
            ? foodService.editDish(newDish._id, newDish)
                .then(() => {
                    props.updateDishes();
                    props.history.push('/food')
                })
                .catch(err => console.error(err))

            : foodService.addNewDish(newDish)
                .then((d) => {
                    props.updateDishes();
                    props.history.push('/food');
                })
                .catch(err => console.log(err))
    }

    const onChange = (event) => {
        event.preventDefault();
        const prop = event.target.name;
        const value = event.target.value;

        setNewDish((prevState) => (
            {
                ...prevState,
                [prop]: value
            }));
    }


    function addDishOption() {
        const newOption = {
            name: []
        }
        setNewDish((prevState) => (
            {
                ...prevState,
                _editing_options: Object.assign(prevState._editing_options,newOption)
            }
        ));
    }

    function onChangeOptionName(optName, event) {
        const newName = event.target.value;
        const optValues = newDish._editing_options[optName];

        const allOptions = newDish._editing_options;
        delete allOptions[optName];
        allOptions[newName] = optValues;
        setNewDish((prevState) => (
            {
                ...prevState,
                _editing_options: allOptions

            }
        ));

    }

    function onChangeOptionValue(optName, indexVal, event) {
        const allOpts = newDish._editing_options;
        allOpts[optName].splice(indexVal,1,event.target.value);
        setNewDish((prevState) => (
            {
                ...prevState,
                _editing_options: allOpts
            }
        ))
    }

    function addOptionValue(optName) {
        const prevOptions = newDish._editing_options;
        prevOptions[optName].push('');
        setNewDish((prevState) => (
            {
                ...prevState,
                _editing_options: prevOptions
            }
        ))
    }

    function removeOptionValue(optName, idxValue) {
        const prevOptions = newDish._editing_options;
        prevOptions[optName].splice(idxValue,1);

        setNewDish((prevState) => (
            {
                ...prevState,
                _editing_options: prevOptions

            }
        ))
    }

    function saveOptions() {
        const newOptions = newDish._editing_options
            ? Object.assign(newDish.options,newDish._editing_options)
            : newDish.options;
        setNewDish((prevState) => (
            {
                ...prevState,
                options: newOptions,
                _editing_options: {}
            }
        ));
    }

    function deleteDishOption(optName) {
        const currentOptions = newDish._editing_options;
        delete currentOptions[optName]
        setNewDish((prevState) => (
            {
                ...prevState,
                _editing_options: currentOptions
            }
        ))
    }

    function editExistOption(optName) {
        const currOptions = newDish.options;
        const optionToEdit = { [optName]: currOptions[optName] };
        delete currOptions[optName];
        setNewDish((prevState) => (
            {
                ...prevState,
                _editing_options: optionToEdit,
                options: currOptions
            }
        ))
    }

    function deleteExistOption(optName) {
        const currOptions = newDish.options;
        delete currOptions[optName];
        setNewDish((prevState) => (
            {
                ...prevState,
                options: currOptions
            }
        ))
    }


    return (
        <article className="new-dish-form-wraper">
            <h1 className="form-title">
                {props.editDish ? 'Edit' : 'Add new'} dish
            </h1>
            <form onSubmit={onSubmit} className="form">
                <label>
                    <p>Name:</p>
                    <input type="text" name="name" onChange={onChange} defaultValue={newDish.name}/>
                </label>
                <label>
                    <p>Category:</p>
                    <select name="category" onChange={onChange} defaultValue={newDish.category}>
                        <option value=""></option>
                        <option value="soup">Soup</option>
                        <option value="salad">Salad</option>
                        <option value="main">Main</option>
                        <option value="desert">Desert</option>
                        <option value="drink">Drink</option>
                        <option value="other">Other</option>
                    </select>

                </label>
                <label>
                    <p>Products:</p>
                    <input type="text" name="products" onChange={onChange} defaultValue={newDish.products}/>
                </label>
                <label>
                    <p>Meatless:</p>
                    <select name="meatless" onChange={onChange} defaultValue={newDish.meatless}>
                        <option value="false">False</option>
                        <option value="true">True</option>
                    </select>

                </label>
                <label>
                    <p>Weight:</p>
                    <input type="number" name="weight" step=".01" onChange={onChange} defaultValue={newDish.weight}/>
                </label>

                <label>
                    <p>Image URL:</p>
                    <input type="text" name="img" onChange={onChange} defaultValue={newDish.img}/>
                </label>

                <label>
                    <p>Price:</p>
                    <input type="number" name="price" step=".01" onChange={onChange} defaultValue={newDish.price}/>
                </label>
                <h4 className="options-title">Dish options:{newDish.options.length === 0 ? ' not set' : ''}</h4>
                <SavedOptions options={newDish.options} editExistOption={editExistOption}
                              deleteExistOption={deleteExistOption}/>
                <DishOptions
                    options={newDish._editing_options ? newDish._editing_options : {}}
                    addDishOption={addDishOption}
                    onChangeOptionName={onChangeOptionName}
                    deleteOption={deleteDishOption}
                    addOptionValue={addOptionValue}
                    onChangeOptionValue={onChangeOptionValue}
                    removeOptionValue={removeOptionValue}
                    saveOptions={saveOptions}/>

                <input type="submit" value="submit" className="submit"/>
            </form>
        </article>
    )
}

export default DishForm;