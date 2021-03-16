const express = require("express");
const router = express.Router();
const { auth } = require("../utils");
const { dishController } = require("../controllers");
import dishModel, {} from '../models/dishModel';
// middleware that is specific to this router

router.get("/", dishController.getAllDishes(dishModel));

router.get("/:category", dishController.getDishesByCategory(dishModel));

router.post("/add-new-dish", auth(), dishController.addNewDish(dishModel));


// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router;