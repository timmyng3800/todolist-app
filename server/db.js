const Pool = require("pg").Pool;

require("dotenv").config();

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "tin112233",
  database: "todoapps",
});

module.exports = pool;
