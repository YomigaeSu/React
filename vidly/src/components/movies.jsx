import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import LikeButton from "./common/likeButton";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/ListGroup";
// import Movie from "./movie";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movieId => {
    deleteMovie(movieId);
    const movies = getMovies();
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

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleFilterItems = filter => {
    this.setState({ selectedGenre: filter, currentPage: 1 });
  };

  render() {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies
    } = this.state;
    const { length: moviesCount } = this.state.movies;
    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const movies = paginate(filteredMovies, currentPage, pageSize);

    if (moviesCount > 0) {
      return (
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              selectedFilter={this.state.selectedGenre}
              onFilterItems={this.handleFilterItems}
            />
          </div>
          <div className="col">
            <p>Showing {filteredMovies.length} movies in the database.</p>
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
                {movies.map(movie => (
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
            <Pagination
              itemsCount={filteredMovies.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      );
    } else {
      return <p>There are no movies in the database.</p>;
    }
  }
}

export default Movies;
