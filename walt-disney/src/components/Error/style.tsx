import styled from "styled-components";

export const BoxError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageError = styled.img`
  width: 100%;
  max-width: 30%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const TextError = styled.h1`
  font-family: "New Walt Disney Font", sans-serif;
  font-size: 80px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 4px;
  margin: 10px;
  background-color: #d3011d;
  padding: 10px;
  margin-bottom: 30px;
  color: #ffd627;
  border: 2px solid #231f20;
  border-radius: 10px;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #231f20;
`;