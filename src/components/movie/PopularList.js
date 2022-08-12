import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPopularMovie } from "../../custom-axios";
import Title from "../common/Title";
import PopularMovieItem from "./PopularItem";

export default function PopularList() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getPopularMovie().then(({ data }) => setMovieList(data.results));
  }, []);
  return (
    <Block>
      <Title text="인기 영화" />
      <MovieListBlock>
        {movieList.map((movie) => (
          <PopularMovieItem key={movie.id} movie={movie} />
        ))}
      </MovieListBlock>
    </Block>
  );
}

const Block = styled.div``;

const MovieListBlock = styled.ul`
  display: flex;
  overflow-x: scroll;
`;
