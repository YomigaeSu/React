import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Movie from "./movie";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  // When {Movie} button:onClick
  // ->onDelete({Movie}.props.id)
  // ->{Movies}handleDelete(Movie.props.id)
  handleDelete = movieId => {
    deleteMovie(movieId);
    const movies = getMovies();
    // console.log(getMovies());
    this.setState({ movies: movies });
  };

  getMovieCount = () => {
    return getMovies().length;
  };

  render() {
    const movieCount = this.getMovieCount();
    if (movieCount > 0) {
      return (
        <div>
          Showing {movieCount} movies in the database.
          <table>
            <tbody>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
              </tr>
              {this.state.movies.map(movie => (
                <Movie
                  key={movie._id}
                  id={movie._id}
                  title={movie.title}
                  genre={movie.genre}
                  stock={movie.numberInStock}
                  rate={movie.dailyRentalRate}
                  onDelete={this.handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <div>There is no movie in the database.</div>;
    }
  }
}

export default Movies;
