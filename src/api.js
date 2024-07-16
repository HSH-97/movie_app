const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTY3Mzc5YzllYmZjMWZkMWE0ZGVmOWVkMzNiMTIyOSIsIm5iZiI6MTcyMDY4NzI3MS41OTgxMjUsInN1YiI6IjY2OGY5NjU0ZGViZTk2MzVkMmU2YTBlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rWnusAG91QLJcBS_WHa9TEOm_otRJVEvJGt8-4kWKSs",
  },
};

const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

export const upcoming = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());
