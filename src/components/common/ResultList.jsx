import styled from "styled-components";
export default function ResultList({ result }) {
  return (
    <Block>
      {result.map((movie) => (
        <ResultItem key={movie.id}>{movie.title}</ResultItem>
      ))}
    </Block>
  );
}

const Block = styled.ul`
  position: absolute;
  width: 300px;
  top: 100%;
  left: -1px;
  border: 1px solid #ddd;
  background-color: #fff;
`;

const ResultItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
  & + & {
    border-top: 1px solid #ddd;
  }
`;
