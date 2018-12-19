import React, { Component } from "react";
import { deleteMovie } from "../services/fakeMovieService";

class Movie extends Component {
  onDelete = () => {
    console.log("Delete", this.props.id);
    deleteMovie(this.props.id);
  };
  render() {
    const { id, title, genre, stock, rate, onDelete } = this.props;
    return (
      <tr>
        <td>{title}</td>
        <td>{genre.name}</td>
        <td>{stock}</td>
        <td>{rate}</td>
        <td>
          <button
            onClick={() => {
              console.log("Delete", id);
              return onDelete(id);
            }}
            className="btn btn-danger btn-small"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;
