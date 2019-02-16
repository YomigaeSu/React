// import * as genresAPI from "./genreService";
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndPoint);
}

export function getMovie(moveId) {
  return http.get(apiEndPoint + "/" + moveId);
}

export function deleteMovie(movieId) {
  return http.delete(apiEndPoint + "/" + movieId);
}
export function saveMovie(movie) {
  const isNewMovie = !movie._id;
  if (isNewMovie) {
    console.log(movie, isNewMovie);
    // const body = {
    //   title: "A",
    //   genreId: "5c6405f16ba2b37adf5cac30",
    //   numberInStock: "10",
    //   dailyRentalRate: "6"
    // };

    return http.post(apiEndPoint, movie);
  } else {
    const body = { ...movie };
    delete body._id;
    return http.put(apiEndPoint + "/" + movie._id, body);
  }

  //   let movieInDb = getMovie(movie._id) || {};
  //   const genres = await genresAPI.getGenres;
  //   movieInDb.title = movie.title;
  //   movieInDb.genre = genres.find(g => g._id === movie.genreId);
  //   movieInDb.numberInStock = movie.numberInStock;
  //   movieInDb.dailyRentalRate = movie.dailyRentalRate;

  //       title: "",
  //       genreId: "",
  //       numberInStock: "",
  //       dailyRentalRate: ""

  //   if (!movieInDb._id) {
  //     // movieInDb._id = String(Date.now());
  //     // movieInDb.liked = false;
  //     http.post(apiEndPoint, movieInDb);
  //   } else {
  //     http.put(apiEndPoint + "/" + movie._id, movieInDb);
  //   }

  //   return movieInDb;
}
