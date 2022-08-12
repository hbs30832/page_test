import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export default function PopularItem({ movie }) {
  const { title, poster_path, id, release_date } = movie;
  const imgUrl = "https://image.tmdb.org/t/p/w500/" + poster_path;

  return (
    <Block>
      <Link to={`detail/movie/${id}`}>
        <ContentBox>
          <ImgBox imgUrl={imgUrl}></ImgBox>
          <TitleText>{title}</TitleText>
          <ReleaseDateText>{release_date}</ReleaseDateText>
        </ContentBox>
      </Link>
    </Block>
  );
}

const Block = styled.li`
  text-align: center;
  width: 300px;
  padding: 20px 0;
  & + & {
    margin-left: 10px;
  }
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      ${ContentBox} {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.7);
        ${ImgBox} {
          transform: scale(1.5);
        }
      }
    `}
`;

const ImgBox = styled.div`
  width: 300px;
  height: 400px;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  ${({ imgUrl }) => css`
    background-image: url(${imgUrl});
  `}
`;

const TitleText = styled.h3`
  margin-top: 10px;
`;

const ReleaseDateText = styled.p`
  font-size: 14px;
  color: #bbb;
`;

const ContentBox = styled.div``;
