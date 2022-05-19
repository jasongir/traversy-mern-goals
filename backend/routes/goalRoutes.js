const express = require("express");
const router = express.Router();
const {
	getGoals,
	deleteGoal,
	updateGoal,
	setGoal,
} = require("../controllers/goalController");

router.get("/", getGoals);

router.post("/", setGoal);

router.put("/:id", updateGoal);

router.delete("/:id", deleteGoal);

module.exports = router;
