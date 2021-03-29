import "./DishItem.css";

function DishItem(props) {
	const dish = props.dish;
	return (
		<article className="dish">
			<img src={dish.img} alt="dish img" />
			<article className="dish-content">
				<h3>{dish.name}</h3>
				<ul className="products">
					<p>Продукти: {dish.products.join(", ")}</p>
					{/* {dish.products.map((p, i) => <li key={i}>{p}</li>)} */}
				</ul>
				<p>{dish.weight} гр.</p>
			</article>

			<article className="dish-buy">
				<article className="dish-buy-options" />
				<article className="dish-buy-order">
					<h3 className="price">{dish.price.toFixed(2)} лв.</h3>
					<button className="price-btn">Добави</button>
				</article>
			</article>
		</article>
	);
}

export default DishItem;
