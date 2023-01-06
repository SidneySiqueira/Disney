import { Pagination } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { SetStateAction, useEffect, useState } from "react";
import * as S from "./style";

interface Data {
  count: number;
  data: data[];
  nextPage: string;
  previousPage: string;
  totalPages: number;
}

type data = {
  films: [string];
  imageUrl: string;
  name: string;
  parkAttractions: [string];
  shortFilms: [string];
  tvShows: [string];
  url: string;
  _id: number;
};

export default function Characters() {
  const [characters, setCharacters] = useState<Data>();
  const [exist, setExist] = useState<SetStateAction<data>>();
  const [typing, setTyping] = useState<SetStateAction<string>>();
  const [numberPage, setNumberPage] = useState<any>(1);

  const isMobile = useMediaQuery('(max-width:768px)');    

  const allCharacters = () => {
    axios
      .get(`https://api.disneyapi.dev/characters?page=${numberPage}`)
      .then((res) => {
        const response = res.data;
        if (response) {
          setCharacters(response);
        }
      });
  };
  useEffect(() => {
    allCharacters();
  }, [numberPage]);

  const filterDisney = () => {
    if (typing !== "") {
      axios
        .get(`https://api.disneyapi.dev/character?name=${typing}`)
        .then((res) => {
          const response = res.data;
          if (response) {
            setCharacters(response);
          }
        });
    } else {
      allCharacters();
    }
  };

  return (
    <S.Container isMobile={isMobile}>
      <S.Box>
        <S.Search style={{display: "flex", flexDirection: isMobile? "column": "row"}}>
          <Link style={{width: isMobile? "80%":"10%"}}
          href="/">
            <S.Image 
            isMobile={isMobile}
            src={isMobile? "https://imagensemoldes.com.br/wp-content/uploads/2018/03/Turma-do-Mickey-Pateta-Rosto-Png.png" : "https://i.pinimg.com/originals/99/0e/4c/990e4cb8be284dc1995b9c2bf818bdd5.png"} />
          </Link>
          <S.Input style={{width: isMobile? "100%" : "60%"}}
          onChange={(e) => setTyping(e.target.value)} />
          <S.Button style={{width: isMobile? "100%" : "25%"}}
          onClick={filterDisney}>Buscar</S.Button>
        </S.Search>
        <S.AllCharacters style={{width: isMobile? "75%" : "", fontSize: isMobile? "35px" :"50px", margin: isMobile? "30px":""}}
        onClick={() => allCharacters()}>
          All Characters
        </S.AllCharacters>
        <S.BoxCard>
          {characters?.data.map((item, index) => {
            return (
              <S.Card key={index}>
                <S.ImageCard src={item.imageUrl} />
                <S.NameCard>{item.name.substring(0,30)}</S.NameCard>
              </S.Card>
            );
          })}
        </S.BoxCard>
        {characters !== undefined && (
          <S.Pagination>
            <Pagination 
              count={characters?.totalPages}
              color="primary"
              page={+numberPage}
              onChange={(e) =>
                setNumberPage(+(e.target as HTMLElement).innerText)
              }
            />
          </S.Pagination>
        )}
      </S.Box>
    </S.Container>
  );
}
