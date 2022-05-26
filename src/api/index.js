import axios from "axios"

export function searchTMDB(search, set) {
    axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
          )
          .then((res) => set(res.data.results));
}