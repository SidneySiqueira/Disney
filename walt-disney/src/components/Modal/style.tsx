import styled from "styled-components";

export const Modal = styled.div`
  width: 500px;
  position: fixed;
  top: 10%;
  left: 30%;
  border: 10px solid #ffd627;
  background-color: #231f20;
  max-height: 80%;
  border-radius: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: #231f20;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffd627;
    border-radius: 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    min-height: 100%;
    top: 0;
    left: 0;
}
`;

export const Box = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const Image = styled.img`
  width: 300px;
  height: 300px;
  margin: 10px;
  overflow: hidden;
`;
export const X = styled.p`
  width: 30px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  text-align: center;
  margin: 5px;
  position: absolute;
  right: 0;
  color: #231f20;
  background-color: #ffd627;
  border-radius: 50px;
  cursor: pointer;
`;

export const BoxTopics = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;
export const Name = styled.p`
  font-family: "New Walt Disney Font", sans-serif;
  font-size: 60px;
  font-weight: bold;
  color: #ffd627;
  text-align: center;
  margin-bottom: 20px;
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #231f20;
`;
export const Topics = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: white;
`;
export const Itens = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  text-align: center;
  padding: 3px;
  margin: 3px;
  color: #231f20;
  background-color: #ffd627;
  border: 1px solid #231f20;
  border-radius: 5px;
`;
