import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/movies";

function movieUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndPoint);
}

export function getMovie(moveId) {
  return http.get(movieUrl(moveId));
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
export function saveMovie(movie) {
  const isNewMovie = !movie._id;
  if (isNewMovie) {
    return http.post(apiEndPoint, movie);
  } else {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }
}
