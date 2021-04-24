import "./DishItem.css";
import {useEffect, useState} from 'react';

function DishItem(props) {
    const {dish, addToCart, isLogged} = props;
    const [showImage, setShowImage] = useState(false);
    const [dishOptions, setDishOptions] = useState({});
    const [additionalPrice, setAdditionalPrice] = useState({});


    useEffect(() => {
        const initalOptions = {};
        if (dish.options) {
            for (const option in dish.options) {
                initalOptions[option] = dish.options[option][0];
            }
        }
        setDishOptions(prev => initalOptions);
    }, []);

    const addOption = (e) => {
        const key = e.target.name;
        const [value, addPrice] = e.target.value.split('|');
        if (addPrice) {
            setAdditionalPrice(prev => ({...prev,[key]: addPrice}));
        } else {
            if(additionalPrice[key]) {
                setAdditionalPrice(prev => ({...prev, [key]: 0}))
            }
        }
        setDishOptions(prev => ({...prev, [key]: value}))
    };

    const showImageToggle = () => {
        setShowImage(prev => !prev);
    };

    const calculateAdditionalPrice = () => {
        let addToPrice = 0;
        if(Object.keys(additionalPrice)?.length > 0) {
            for (const key in additionalPrice) {
                addToPrice += Number(additionalPrice[key]);
            };
        }
        return addToPrice;
    };

    const addDishToCart = () => {

        dish.price += calculateAdditionalPrice();
        dish.selected_options = dishOptions;
        addToCart(dish);
        dish.price -= calculateAdditionalPrice();
    };
    return (
        <article className="dish">
            {/*<article className="dish-big-img">*/}
            {/*    {*/}
            {/*        showImage*/}
            {/*            ? <img src={dish.img} display={showImage} class="dish-big-image"/>*/}
            {/*            : null*/}
            {/*    }*/}
            {/*</article>*/}
            <img src={dish.img} alt="dish img" onClick={showImageToggle}/>
            <article className="dish-content">
                <h3>{dish.name}</h3>
                <ul className="products">
                    <p>Продукти: {dish.products.join(", ")}</p>
                </ul>
                <p>{dish.weight} гр.</p>
                {
                    dish.options
                        ? Object.keys(dish.options).length > 0 && isLogged
                        ? <article className="dish-buy-options">
                            {
                                Object.keys(dish.options)?.length > 0

                                    ? Object.keys(dish.options)?.map(key => {
                                        const options = dish.options[key];
                                        return (
                                            <article className="dish-select-wrapper" key={key}>
                                                <label htmlFor={key}>{key}</label>
                                                <select className="dish-select"
                                                        name={key}
                                                        id={key}
                                                        onChange={addOption}
                                                >
                                                    {
                                                        options.map(opt => {
                                                                const [value, addPrice] = opt.split('|');
                                                                return (
                                                                    <option className="dish-option"
                                                                            value={opt}
                                                                            key={opt}
                                                                    >
                                                                        {
                                                                            addPrice
                                                                                ? `${value} (+${Number(addPrice).toFixed(2)} лв.)`
                                                                                : `${value}`
                                                                        }
                                                                    </option>
                                                                )
                                                            }
                                                        )

                                                    }
                                                </select>
                                            </article>
                                        );
                                    }
                                    )
                                    : null

                            }

                        </article>
                        : null
                        : null
                }
            </article>

            <article className="dish-buy">
                <article className="dish-buy-order">
                    <h3 className="price">{(dish.price + calculateAdditionalPrice()).toFixed(2)} лв.</h3>
                    {
                        isLogged
                            ? <button className="price-btn"
                                      onClick={addDishToCart}>Добави</button>
                            : null
                    }
                </article>
            </article>
        </article>
    );
}

export default DishItem;
