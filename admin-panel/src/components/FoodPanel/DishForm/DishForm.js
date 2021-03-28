import {useState} from 'react';
import './DishForm.css'
import DishOptions from './DishOptions';
import SavedOptions from './SavedOptions';
import * as foodService from '../../../services/foodService';


function DishForm(props) {
    const initialDish = {
        name: '', products: '', meatless: false, category: '', price: 0,
        weight: 0, img: '', options: [], _editing_options: []
    }
    const editDish = props.editDish ? props.editDish(props.match.params.id) : null;
    if(editDish) {
        editDish._editing_options = [];
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
        event.preventDefault()
        const prop = event.target.name;
        const value = event.target.value;

        setNewDish((prevState) => (
            {
                ...prevState,
                [prop]: value
            }));
    }


    function addDishOption(event) {
        const newOption = {
            name: []
        }
        setNewDish((prevState) => (
            {
                ...prevState,
                _editing_options: prevState._editing_options ? prevState._editing_options.concat(newOption) : newOption
            }
        ));
    }

    function onChangeOptionName(index, event) {
        const newName = event.target.value;
        const currOption = newDish._editing_options[index];
        const [oldName] = Object.keys(currOption);
        let newWordsObject = {};

        Object.keys(currOption).forEach(key => {
            if (key === oldName) {
                let newPair = {[newName]: currOption[oldName]};
                newWordsObject = {...newWordsObject, ...newPair}
            } else {
                newWordsObject = {...newWordsObject, [key]: currOption[key]}
            }
        });
        const allOptions = newDish._editing_options;
        allOptions[index] = newWordsObject;
        setNewDish((prevState) => (
            {
                ...prevState,
                _editing_options: allOptions

            }
        ))

    }

    function onChangeOptionValue(indexOpt, indexVal, event) {
        const [optName] = Object.keys(newDish._editing_options[indexOpt]);
        const allOpts = newDish._editing_options;
        allOpts[indexOpt][optName][indexVal] = event.target.value;
        setNewDish((prevState) => (
            {
                ...prevState,
                _editing_options: allOpts
            }
        ))
    }

    function addOptionValue(index) {
        const prevOptions = newDish._editing_options;
        const [optName] = Object.keys(prevOptions[index]);
        prevOptions[index][optName].push('');
        setNewDish((prevState) => (
            {
                ...prevState,
                _editing_options: prevOptions

            }
        ))
    }

    function removeOptionValue(indexOpt, idxValue) {
        const prevOptions = newDish._editing_options;
        const [optName] = Object.keys(prevOptions[indexOpt]);
        prevOptions[indexOpt][optName][idxValue] = null;

        setNewDish((prevState) => (
            {
                ...prevState,
                _editing_options: prevOptions

            }
        ))
    }

    function saveOptions() {
        const newOptions = newDish._editing_options
            ? newDish._editing_options.concat(newDish.options)
            : newDish.options
        setNewDish((prevState) => (
            {
                ...prevState,
                options: newOptions
            }
        ))
        deleteDishOption(-1);

    }

    function deleteDishOption(index) {
        const currentOptions = index ? newDish._editing_options : [];
        if (index) {
            currentOptions.splice(index, 1);

        }
        setNewDish((prevState) => (
            {
                ...prevState,
                _editing_options: currentOptions
            }
        ))
    }

    function editExistOption(index) {
        const currOptions = newDish.options;
        const optionToEdit = currOptions.splice(index, 1);
        setNewDish((prevState) => (
            {
                ...prevState,
                _editing_options: optionToEdit,
                options: currOptions
            }
        ))
    }

    function deleteExistOption(index) {
        const currOptions = newDish.options;
        currOptions.splice(index, 1);
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
                    options={newDish._editing_options ? newDish._editing_options : []}
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