import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import styled, { css } from "styled-components";
import { getMovieDetail } from "../../custom-axios";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import Loading from "../common/Loading";

export default function DetailBox() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const preventScroll = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getMovieDetail(id).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [id]);

  useEffect(() => {
    window.addEventListener("wheel", preventScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", preventScroll);
    };
  }, []);

  const imgUrl = data && "https://image.tmdb.org/t/p/w500" + data.poster_path;
  if (!data) return <Loading />;
  return (
    <BgBlock onClick={() => navigate("/")}>
      <Block isLoading={loading}>
        <ImgBox>
          <img src={imgUrl} alt="" />
        </ImgBox>
        <ContentBox>
          <MovieTitle>{data.title}</MovieTitle>
          <ReleaseDate>{data.release_date}</ReleaseDate>
          <OverView>{data.overview}</OverView>
        </ContentBox>
        <BtnClose>
          <Link to="/">
            <IoClose size={24} />
          </Link>
        </BtnClose>
      </Block>
    </BgBlock>
  );
}

const BgBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Block = styled.div`
  display: flex;
  min-width: 700px;
  min-height: 500px;
  background-color: #fff;
  border-radius: 8px;
  padding: 50px;
  position: relative;
  ${({ isLoading }) =>
    isLoading &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

const ContentBox = styled.div`
  padding: 0 20px;
  width: 500px;
`;

const MovieTitle = styled.h2`
  font-size: 1.6em;
`;

const ReleaseDate = styled.p`
  font-size: 14px;
  color: #bbb;
`;

const ImgBox = styled.div`
  height: 400px;
  width: 300px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  img {
    height: 100%;
    border-radius: 6px;
  }
`;

const OverView = styled.div`
  margin-top: 20px;
  line-height: 1.6em;
`;

const BtnClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
