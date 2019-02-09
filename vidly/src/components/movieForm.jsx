import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      numberInStock: "",
      rate: ""
    },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    genre: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .integer()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    rate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Rate")
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      const { title, genre, numberInStock, dailyRentalRate: rate } = getMovie(
        id
      );
      const data = { ...this.state.data };
      data.title = title;
      data.genre = genre.name;
      data.numberInStock = numberInStock;
      data.rate = rate;
      this.setState({ data });
    }
  }

  doSubmit = e => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    const { history } = this.props;
    let genreOption = [];
    const genres = getGenres();
    genres.map(g => {
      genreOption.push(g.name);
      return genreOption;
    });

    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderDropList(genreOption, "genre", "Genre")}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("rate", "Rate")}
        </form>
        <button
          disabled={this.validate()}
          className="btn btn-primary"
          onClick={() => {
            history.push("/movies");
          }}
        >
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
