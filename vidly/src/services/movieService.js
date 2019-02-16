// import * as genresAPI from "./genreService";
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndPoint);
}

export function deleteMovie(movieId) {
  return http.delete(apiEndPoint + "/" + movieId);
}
// export async function saveMovie(movie) {
//   let movieInDb = getMovie(movie._id) || {};
//   const genres = await genresAPI.getGenres;
//   movieInDb.title = movie.title;
//   movieInDb.genre = genres.find(g => g._id === movie.genreId);
//   movieInDb.numberInStock = movie.numberInStock;
//   movieInDb.dailyRentalRate = movie.dailyRentalRate;

//   if (!movieInDb._id) {
//     movieInDb._id = String(Date.now());
//     movieInDb.liked = false;
//     http.post(apiEndPoint, movieInDb);
//   } else {
//     http.put(apiEndPoint + "/" + movie._id, movieInDb);
//   }

//   return movieInDb;
// }
