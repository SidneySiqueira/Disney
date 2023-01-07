import React, { Dispatch, SetStateAction } from "react";
import * as S from "./style";

interface Choice {
  choice: {
    allies: Array<string>;
    enemies: Array<string>;
    films: Array<string>;
    imageUrl: string;
    name: string;
    parkAttractions: Array<string>;
    shortFilms: Array<string>;
    tvShows: Array<string>;
    url: string;
    videoGames: Array<string>;
    _id: number;
  };
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}
export default function Modal({ choice, setOpenModal }: Choice) {
  
  return (
    <S.Modal>
      <S.BoxImage>
        <S.Image src={choice.imageUrl} />
        <S.X onClick={() => setOpenModal(false)}>X</S.X>
      </S.BoxImage>
      <S.Box>
        <>
            <S.Name>{choice.name}</S.Name>
          {choice.films.length !== 0 &&
          <S.BoxTopics>
            <S.Topics>Films:</S.Topics>
            {choice.films.map((item: string) => {
              return <S.Itens key={item}>{item}</S.Itens>;
            })}
          </S.BoxTopics>}
          {choice.tvShows.length !== 0 &&
            <S.BoxTopics>
            <S.Topics>TV Shows:</S.Topics>
            {choice.tvShows.map((item: string) => {
              return <S.Itens key={item}>{item}</S.Itens>;
            })}
          </S.BoxTopics>}
          {choice.videoGames.length !== 0 &&
            <S.BoxTopics>
            <S.Topics>Games:</S.Topics>
            {choice.videoGames.map((item: string) => {
              return <S.Itens key={item}>{item}</S.Itens>;
            })}
          </S.BoxTopics>}
          {choice.parkAttractions.length !== 0 &&
            <S.BoxTopics>
            <S.Topics>Park Attractions:</S.Topics>
            {choice.parkAttractions.map((item: string) => {
              return <S.Itens key={item}>{item}</S.Itens>;
            })}
          </S.BoxTopics>}
        </>
      </S.Box>
    </S.Modal>
  );
}
