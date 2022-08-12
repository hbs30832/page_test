import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBox from "./common/SearchBox";

const gnbList = [
  {
    id: 1,
    text: "Home",
    url: "/home",
  },
  {
    id: 2,
    text: "Movie",
    url: "/movie",
  },
  {
    id: 3,
    text: "Tv",
    url: "/tv",
  },
];

export default function Header() {
  return (
    <HeaderBlock>
      <Logo>Nepp Movie</Logo>
      <nav>
        <GnbList>
          {gnbList.map((menu) => (
            <li key={menu.id}>
              <Link to={menu.url}>{menu.text}</Link>
            </li>
          ))}
        </GnbList>
      </nav>
      <SearchBox />
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 100px;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-right: 50px;
`;

const GnbList = styled.ul`
  display: flex;
  margin-right: 50px;
  li {
    & + li {
      margin-left: 20px;
    }
  }
`;
