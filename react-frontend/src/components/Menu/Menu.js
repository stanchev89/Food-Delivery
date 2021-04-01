import "./Menu.css";
import DishItem from "./DishItem/DishItem";
import Cart from "../Cart/Cart";
import foodService from "../../services/foodService";
import userService from "../../services/userService";

const initialCart = {
	products:[],
	totalPrice:0
}

function Menu(props) {
	const {menu, user,setUser} = props;

	const addToCart = (dish) => {
		foodService.addToCart(user,dish)
			.then(user => {
				setUser(user);
			})
			.catch(console.error)
	}

	const clearCart = () => {
		userService.editUserData({cart:initialCart})
			.then(user => setUser(user))
			.catch(console.error);
	}

	return (
		<section className="menu">
			<article className="food-list">
				<article className="salads">
					<h2 className="food-list-title">Салати</h2>
					<ul>
						{menu?.filter((d) => d.category === "salad").map((d) => (
							<li key={d._id}>
								<DishItem dish={d} addToCart={addToCart} />
							</li>
						))}
					</ul>
				</article>
				<article className="soups">
					<h2 className="food-list-title">Супи</h2>
					<ul>
						{menu?.filter((d) => d.category === "soup").map((d) => (
							<li key={d._id}>
								<DishItem dish={d} addToCart={addToCart}/>
							</li>
						))}
					</ul>
				</article>
				<article className="main-dishes">
					<h2 className="food-list-title">Основни ястия</h2>
					<ul>
						{menu?.filter((d) => d.category === "main").map((d) => (
							<li key={d._id}>
								<DishItem dish={d} addToCart={addToCart}/>
							</li>
						))}
					</ul>
				</article>
				<article className="deserts">
					<h2 className="food-list-title">Десерти</h2>
					<ul>
						{menu?.filter((d) => d.category === "desert").map((d) => (
							<li key={d._id}>
								<DishItem dish={d} addToCart={addToCart}/>
							</li>
						))}
					</ul>
				</article>
				<article className="drinks">
					<h2 className="food-list-title">Напитки</h2>
					<ul>
						{menu?.filter((d) => d.category === "drink").map((d) => (
							<li key={d._id}>
								<DishItem dish={d} addToCart={addToCart}/>
							</li>
						))}
					</ul>
				</article>
			</article>
			<Cart user={user} clearCart={clearCart} setUser={setUser}/>
		</section>
	);
}

export default Menu;
