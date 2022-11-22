const express = require("express");
const { readAbilities } = require("../services/ability");

const router = express.Router();

router.get("/abilities", readAbilities);
// router.post("/abilities", createAbility);

//export default
module.exports = router;
