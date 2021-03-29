import './CartItem.css';

function CartItem({item}) {
    return (
        <article className="cart-item">
            <article className="cart-item-img-wrapper">
                <img src="item.img" alt="dish img"/>
            </article>
            <article className="cart-item-info">
                
            </article>
            <article className="cart-item-controls">

            </article>
        </article>
    )
}

export default CartItem;