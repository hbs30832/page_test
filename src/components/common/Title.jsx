import styled from "styled-components";

export default function Title({ text }) {
  return <TitleText>{text}</TitleText>;
}

const TitleText = styled.h3`
  font-size: 1.6em;
  margin: 20px 0;
`;
