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
};

function close() {
  return pool.end();
}

module.exports = {
  readAbilities,
  close,
};
