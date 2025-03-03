const express = require("express");
const morgan = require('morgan');
const app = express();
app.use(express.json());
app.use(morgan('dev'));

const movieController= require('./controllers/moviesController')


app.get("/movies", movieController.getMovies);
// app.get("/movies/:id", getById);
// app.post("/movies", addMovie);
// app.patch("/movies/:id", updateMovie);
// app.delete("/movies/:id", deleteMovie);

//Creating server
const port = 3000;
app.listen(port, () => {
  console.log(`Server satarted on port ${port}`);
});
