import http from "./httpService";

const apiEndPoint = "http://localhost:3900/api/genres";

export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" }
];

export async function getGenres() {
  const genres = await http.get(apiEndPoint);
  console.log(genres);

  return genres.filter(g => g);
}
