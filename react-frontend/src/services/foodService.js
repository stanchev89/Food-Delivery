import environments from "../environments";
const foodService = {
	getDailyMenu: function() {
		const fullPath = environments.apiURL + "dishes/";
		return fetch(fullPath).then((dishes) => dishes.json()).catch((err) => console.error(err));
	}
};

export default foodService;
