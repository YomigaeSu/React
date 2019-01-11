import React, { Component } from "react";
import { Link } from "react-router-dom";
import LikeButton from "./common/likeButton";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      // content is a method, that takes movie input and return a button
      content: movie => {
        return (
          <LikeButton
            liked={movie.liked}
            onClick={() => this.props.onLike(movie)}
          />
        );
      }
    },
    {
      key: "delete",
      content: movie => {
        return (
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              this.props.onDelete(movie._id);
            }}
          >
            Delete
          </button>
        );
      }
    }
  ];

  raiseSort = path => {
    let sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        items={movies}
      />
    );
  }
}

export default MoviesTable;
