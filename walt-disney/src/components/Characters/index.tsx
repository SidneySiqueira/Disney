import { Pagination } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, {
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import Error from "../Error";
import * as S from "./style";
import Modal from "../Modal";

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
  const [openModal, setOpenModal] = useState(false);
  const [typing, setTyping] = useState<SetStateAction<string>>();
  const [numberPage, setNumberPage] = useState<any>(1);
  const [choice, setChoice] = useState();
  const [error, setError] = useState(false);

  const isMobile = useMediaQuery("(max-width:768px)");

  const allCharacters = () => {
    axios
      .get(`https://api.disneyapi.dev/characters?page=${numberPage}`)
      .then((res) => {
        const response = res.data;
        if (response) {
          setCharacters(response);
        }
      })
      .catch((error) => {
        setError(true);
      });
  };
  useLayoutEffect(() => {
    allCharacters();
  }, [numberPage]);

  const filterDisney = () => {
    if (typing !== undefined && typing !== "") {
      axios
        .get(`https://api.disneyapi.dev/character?name=${typing}`)
        .then((res) => {
          const response = res.data;
          if (response) {
            setCharacters(response);
          }
        })
        .catch((error) => {
          setError(true);
        });
    } else {
      allCharacters();
    }
  };

  const choiceCharacter = (id: number) => {
    axios
      .get(`https://api.disneyapi.dev/characters/${id}`)
      .then((res) => {
        const response = res.data;
        if (response) {
          setChoice(response);
        }
      })
      .catch((error) => {
        setError(true);
      });
      setTimeout(() => {
        setOpenModal(true);
      }, 500);
  };

useEffect(()=>{
  document.addEventListener("keypress", (e) => {    
    if(e.key === 'Enter') {
        var btn = document.querySelector("#submit") as HTMLElement;
        btn.click();
    }
  });
},[])

  return (
    <S.Container>
      {!error ? (
        <S.Box>
          <S.Search>
            <Link style={{ width: isMobile ? "80%" : "10%" }} href="/">
              <S.Image
                src={
                  isMobile
                    ? "https://imagensemoldes.com.br/wp-content/uploads/2018/03/Turma-do-Mickey-Pateta-Rosto-Png.png"
                    : "https://i.pinimg.com/originals/99/0e/4c/990e4cb8be284dc1995b9c2bf818bdd5.png"
                }
              />
            </Link>
            <S.Input onChange={(e) => setTyping(e.target.value)} />
            <S.Button id="submit" onClick={filterDisney}>
              Buscar
            </S.Button>
          </S.Search>
          <S.AllCharacters onClick={() => allCharacters()}>
            All Characters
          </S.AllCharacters>
          {characters?.count !== 0 ? (
            <S.BoxCard>
              {characters?.data.map((item, index) => {
                return (
                  <S.Card key={index} onClick={() => choiceCharacter(item._id)}>
                    <S.ImageCard src={item.imageUrl} />
                    <S.NameCard>{item.name.substring(0, 30)}</S.NameCard>
                  </S.Card>
                );
              })}
            </S.BoxCard>
          ) : (
            <S.NoCharacters>
              <S.ImageNoCharacters src="https://www.1papacaio.com.br/images/pngs/disney/donald/pato-donald-023.png" />
              <S.TextNoCharacters>
                Sorry! No characters found
              </S.TextNoCharacters>
            </S.NoCharacters>
          )}
          {characters?.totalPages && characters !== undefined && (
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
      ) : (
        <Error />
      )}
      {openModal && choice !== undefined && (
        <Modal choice={choice} setOpenModal={setOpenModal} />
      )}
    </S.Container>
  );
}
