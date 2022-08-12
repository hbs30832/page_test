import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzUxMzgyOGY0MGU4YTgwNzMxYjBhN2Y1YTUwMjExNSIsInN1YiI6IjVlOGE3YjhiYjE4ZjMyMDAxM2UyZDUwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uqfn7ygDJUCKh_TZhcuGR2qIVxYRJD8QSLGyP9XwfcM",
  },
});

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
  console.log("검색");
  try {
    let data = await instance.get("/search/movie", {
      params: {
        language: "ko-KR",
        query,
        page,
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
