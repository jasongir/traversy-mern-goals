const express = require("express");
const router = express.Router();
const {
	getGoals,
	deleteGoal,
	updateGoal,
	setGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoal);

router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
