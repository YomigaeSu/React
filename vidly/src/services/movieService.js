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
    return http.post(apiEndPoint, movie);
  } else {
    const body = { ...movie };
    delete body._id;
    return http.put(apiEndPoint + "/" + movie._id, body);
  }
}
