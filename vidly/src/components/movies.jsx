import React, { Component } from "react";
// import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getMovies, deleteMovie } from "../services/movieService";
// import { getGenres } from "../services/fakeGenreService";
import { getGenres } from "../services/genreService";

import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/ListGroup";
import MoviesTable from "./moviesTable";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import _ from "lodash";
import SearchBox from "./common/searchBox";

// import Movie from "./movie";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
    searchTerm: "",
    sortColumn: { path: "title", order: "asc" }
  };

  async componentDidMount() {
    const { data } = await getGenres();
    const genres = [{ name: "All Genres", _id: "" }, ...data];
    const { data: movies } = await getMovies();
    this.setState({ movies, genres });
  }

  handleDelete = async movieId => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter(m => m._id !== movieId);
    this.setState({ movies });

    try {
      await deleteMovie(movieId);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.log("toast should work");
        toast.error("This movies has already been deleted.");
      }
      this.setState({ movies: originalMovies });
    }
  };

  getMovieCount = async () => {
    const movies = await getMovies();
    return movies.length;
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

  handleFilterItems = genre => {
    this.setState({ selectedGenre: genre, searchTerm: "", currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleSearchChange = query => {
    this.setState({ searchTerm: query, selectedGenre: null, currentPage: 1 });
  };

  getPagedData() {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      searchTerm,
      sortColumn,
      movies: allMovies
    } = this.state;

    let filteredMovies = {};
    if (searchTerm) {
      filteredMovies = allMovies.filter(
        m => m.title.match(new RegExp(searchTerm, "i"))
        // m.title.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
    } else {
      filteredMovies =
        selectedGenre && selectedGenre._id
          ? allMovies.filter(m => m.genre._id === selectedGenre._id)
          : allMovies;
    }

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const movies = paginate(sortedMovies, currentPage, pageSize);

    return { movies, totalCount: filteredMovies.length };
  }

  render() {
    // Extract all state

    const { pageSize, currentPage, sortColumn, searchTerm } = this.state;
    const { length: moviesCount } = this.state.movies;
    const { user } = this.props;

    if (moviesCount === 0) return <p>There are no movies in the database.</p>;

    const { movies, totalCount } = this.getPagedData();
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
          
          {user && (
            <Link
              to="/movies/new"
              className="btn btn-primary"
              style={{ marginBottom: 20 }}
            >
              New Movie
            </Link>
          )}
          <p>Showing {totalCount} movies in the database.</p>
          <SearchBox value={searchTerm} onChange={this.handleSearchChange} />
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
            user={user}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
