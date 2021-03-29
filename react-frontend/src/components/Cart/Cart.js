import './Cart.css';

function Cart(props) {
    const user = props.user;
    return (
        <section className="cart">

        </section>
    )
}

export default Cart;


<a *ngIf="(user$ | async).cart.products.length > 0" routerLink="/cart" class="cart-badge">{{(user$ | async).cart.products.length}}</a>
<i class="fas fa-shopping-cart fa-2x"></i>
<ng-container *ngTemplateOutlet=" orderDetails ? details : cartProducts"></ng-container>
<p class="empty-cart" *ngIf="(user$ | async).cart.products.length === 0 && !orderCompleted">Няма добавени продукти...</p>
<div class="alert alert-success" role="alert" *ngIf="orderCompleted">
<p>Вашата поръчка е приета.</p>
<p>Благодарим ви!</p>
<i class="fas fa-check-circle fa-5x"></i>
</div>