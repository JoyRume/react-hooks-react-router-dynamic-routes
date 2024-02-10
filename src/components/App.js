import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import MoviesPage from "./MoviesPage";

function App() {
  const [movies, setMovies] = useState({
    1: { id: 1, title: "A River Runs Through It" },
    2: { id: 2, title: "Se7en" },
    3: { id: 3, title: "Inception" },
  });

  // Function to add a new movie
  const addMovie = (id, title) => {
    
    const newMovie = { id, title };
    // Updating the movies state with the new movie
    setMovies((prevMovies) => {
      // Using spread operator to copy the previous movies object
      return { ...prevMovies, [id]: newMovie };
    });
  };

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies">
          {/* Passing addMovie function to MoviesPage component */}
          <MoviesPage movies={movies} addMovie={addMovie} />
        </Route>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
