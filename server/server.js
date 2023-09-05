const PORT = process.env.PORT ?? 8000;

const express = require("express");

const app = express();
const cors = require("cors");

const pool = require("./db");
//get all todos

app.use(cors());

app.get("/todos/:userEmail", async (req, res) => {
  
  const  user_Email = req.params.userEmail;
  console.log(user_Email,"testsd");
  try {
    const todos = await pool.query(
      "SELECT * FROM todos WHERE user_email = $1",
      [user_Email]
    );
    res.json(todos.rows);
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
