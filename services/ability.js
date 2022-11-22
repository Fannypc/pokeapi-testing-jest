// const { Pokemon, Pokemon_Abilities, Ability, Type } = require("../models");

const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pokeapi",
  password: "root",
  port: 5432,
});

const readAbilities = async (req, res) => {
  console.log("estoy en ability");
  await pool.query("SELECT NOW()", (err, result) => {
    // console.log(err, result);
    res.send(result);
  });
  // res.sendStatus(200);
};

// const createAbility = async (request, response, next) => {
//   try {
//     const ability = await Ability.create(request.body);
//     response.json(ability);
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

function close() {
  return pool.end();
}

module.exports = {
  readAbilities,
  close,
  //   createAbility,
};
