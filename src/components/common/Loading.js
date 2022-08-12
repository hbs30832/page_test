import styled, { keyframes } from "styled-components";

export default function Loading() {
  return <LoadingCircle></LoadingCircle>;
}

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const LoadingCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #ddd;
  border-left: 5px solid #aaa;
  animation: ${rotate} 1s linear 0s infinite;
`;
