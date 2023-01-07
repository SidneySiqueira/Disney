import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url(https://img.elo7.com.br/product/zoom/355A4E5/tecido-mickey-disney-pronta-entrega-140-cm-x-50-cm-painel-festa.jpg);
  background-size: 100%;
  background-repeat: repeat;
  @media (max-width: 768px) {
    background-image: none;
    background-color: #ffd627;
    border: 10px solid black;
    border-radius: 5px;
  }
`;

export const Search = styled.div`
  width: 75%;
  max-width: 1550px;
  display: flex;
  align-items: center;
  margin: 10px 10px 0 10px;
  @media (max-width: 768px) {
    flex-direction: column;
}
`;

export const Image = styled.img`
  width: 100%;
  max-width: 100px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Input = styled.input`
  width: 60%;
  height: 50px;
  margin: 20px;
  border: 2px solid black;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Button = styled.button`
  width: 25%;
  height: 50px;
  font-family: "New Walt Disney Font", sans-serif;
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 4px;
  color: #ffd425;
  cursor: pointer;
  border: 2px solid #231f20;
  border-radius: 10px;
  background-color: #d3011d;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #231f20;
  :hover {
    background-color: #ffd425;
    transition: 0.7s;
    color: #231f20;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  width: 280px;
  height: 350px;
  background: linear-gradient(#231f20 70%, #d3011d 30%);
  border: 3px solid #231f20;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  cursor: pointer;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const BoxCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1550px;
  width: 90%;
`;
export const ImageCard = styled.img`
  margin: 10px 10px 0 10px;
  border: 1px solid white;
  border-radius: 5px;
  overflow: hidden;
  width: 250px;
  height: 250px;
`;
export const NameCard = styled.p`
  font-family: "New Walt Disney Font", sans-serif;
  font-size: 45px;
  font-weight: bold;
  letter-spacing: 4px;
  color: #ffd627;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #231f20;
  margin: 5px 10px;
  text-align: center;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  background-color: #d3011d;
  margin: 50px 0 50px 0;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #231f20;
`;

export const AllCharacters = styled.p`
  font-family: "New Walt Disney Font", sans-serif;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 4px;
  background-color: #d3011d;
  padding: 10px;
  color: #ffd627;
  border: 2px solid #231f20;
  border-radius: 10px;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #231f20;
  cursor: pointer;
  :hover {
    background-color: #ffd425;
    transition: 0.7s;
    color: #231f20;
  }
  @media (max-width: 768px) {
    width: 75%;
    font-size: 35px;
    margin:30px;
  }
`;
export const NoCharacters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1550px;
  width: 90%;
`;

export const ImageNoCharacters = styled.img`
  width: 100%;
  max-width: 30%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const TextNoCharacters = styled.h1`
  font-family: "New Walt Disney Font", sans-serif;
  font-size: 80px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 4px;
  background-color: #d3011d;
  padding: 10px;
  margin-bottom: 30px;
  color: #ffd627;
  border: 2px solid #231f20;
  border-radius: 10px;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #231f20;
`;

