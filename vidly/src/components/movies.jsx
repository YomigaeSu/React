import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import LikeButton from "./likeButton";
// import Movie from "./movie";

class Movies extends Component {
  state = {
    movies: getMovies()
  };
  handleDelete = movieId => {
    deleteMovie(movieId);
    const movies = getMovies();
    // console.log(getMovies());
    this.setState({ movies: movies });
  };

  getMovieCount = () => {
    return getMovies().length;
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  render() {
    const { length: moviesCount } = this.state.movies;
    if (moviesCount > 0) {
      return (
        <React.Fragment>
          <p>Showing {moviesCount} movies in the database.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <LikeButton
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        this.handleDelete(movie._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      );
    } else {
      return <p>There are no movies in the database.</p>;
    }
  }
}

export default Movies;
