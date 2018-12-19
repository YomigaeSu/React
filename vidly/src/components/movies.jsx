import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
// import Movie from "./movie";

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
                // <Movie
                //   key={movie._id}
                //   id={movie._id}
                //   title={movie.title}
                //   genre={movie.genre}
                //   stock={movie.numberInStock}
                //   rate={movie.dailyRentalRate}
                //   onDelete={this.handleDelete}
                // />
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
