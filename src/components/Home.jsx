import { Route, Routes } from "react-router";
import styled from "styled-components";
import DetailBox from "./movie/DetailBox";
import PopularList from "./movie/PopularList";

export default function Home() {
  return (
    <Block>
      <PopularList />
      <Routes>
        <Route path="detail/movie/:id" element={<DetailBox />} />
      </Routes>
    </Block>
  );
}

const Block = styled.div`
  padding: 50px 100px;
`;
