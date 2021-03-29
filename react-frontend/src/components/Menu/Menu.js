import "./Menu.css";
import { useState, useEffect } from "react";
import environments from "../../environments";
import foodService from "../../services/foodService";
import DishItem from "./DishItem/DishItem";

function Menu(props) {
	const [ menu, setMenu ] = useState([]);
	useEffect(() => {
		foodService.getDailyMenu().then((dishes) => {
			setMenu(dishes);
		});
	}, []);
	return (
		<section className="menu">
			<article className="food-list">
				<article className="salads">
					<h2 className="food-list-title">Салати</h2>
					<ul>
						{menu.filter((d) => d.category === "salad").map((d) => (
							<li key={d._id}>
								<DishItem dish={d} />
							</li>
						))}
					</ul>
				</article>
				<article className="soups">
					<h2 className="food-list-title">Супи</h2>
					<ul>
						{menu.filter((d) => d.category === "soup").map((d) => (
							<li key={d._id}>
								<DishItem dish={d} />
							</li>
						))}
					</ul>
				</article>
				<article className="main-dishes">
					<h2 className="food-list-title">Основни ястия</h2>
					<ul>
						{menu.filter((d) => d.category === "main").map((d) => (
							<li key={d._id}>
								<DishItem dish={d} />
							</li>
						))}
					</ul>
				</article>
				<article className="deserts">
					<h2 className="food-list-title">Десерти</h2>
					<ul>
						{menu.filter((d) => d.category === "desert").map((d) => (
							<li key={d._id}>
								<DishItem dish={d} />
							</li>
						))}
					</ul>
				</article>
				<article className="drinks">
					<h2 className="food-list-title">Напитки</h2>
					<ul>
						{menu.filter((d) => d.category === "drink").map((d) => (
							<li key={d._id}>
								<DishItem dish={d} />
							</li>
						))}
					</ul>
				</article>
			</article>
		</section>
	);
}

export default Menu;
