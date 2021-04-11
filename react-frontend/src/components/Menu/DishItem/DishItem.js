import "./DishItem.css";
import {useState} from 'react';

function DishItem(props) {
    const {dish, addToCart, isLogged} = props;
    const [showImage, setShowImage] = useState(false);
    const showImageToggle = () => {
        setShowImage(prev => !prev);
    }
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
            </article>

            <article className="dish-buy">
                <article className="dish-buy-options"/>
                <article className="dish-buy-order">
                    <h3 className="price">{dish.price.toFixed(2)} лв.</h3>
                    {
                        isLogged
                            ? <button className="price-btn" onClick={addToCart.bind(null, dish)}>Добави</button>
                            : null
                    }
                </article>
            </article>
        </article>
    );
}

export default DishItem;
