import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
  },
});

console.log("test : ", process.env.REACT_APP_TMDB_API_KEY);

export async function getPopularMovie() {
  try {
    let data = instance.get("movie/popular", {
      params: {
        language: "ko-KR",
        page: 1,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getMovieDetail(id) {
  try {
    return instance.get(`/movie/${id}`, {
      params: {
        language: "ko-KR",
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export const getSearch = async (query, page) => {
  try {
    let data = await instance.get("/search/movie", {
      params: {
        language: "ko-KR",
        query,
        page,
        include_adult: false,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const debounce = (func, wait) => {
  let timer;
  return function (...rest) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, rest);
    }, wait);
  };
};
