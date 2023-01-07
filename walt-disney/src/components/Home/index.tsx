import React, { useEffect, useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import * as S from "./style";
import Link from "next/link";

export default function PageMain() {

    const isMobile = useMediaQuery('(max-width:768px)');    

  return (
    <S.Container isMobile={isMobile}>
      {!isMobile && (
        <div
          style={{ width: "40%", display: "flex", justifyContent: "flex-end" }}
        >
          <S.Mickey src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/mickey-png.png" />
        </div>
      )}
      <S.Menu>
        <S.Logo src={isMobile? "https://imagensemoldes.com.br/wp-content/uploads/2018/03/Turma-do-Mickey-Mickey-Rosto-Png.png":"https://logodownload.org/wp-content/uploads/2014/04/walt-disney-logo-1.png"} />
        <Link href="/PageInformation">
          <S.Button style={{width: isMobile? "300px": "600px", margin: isMobile? "10px":""}}>All Characters</S.Button>
        </Link>
      </S.Menu>
    </S.Container>
  );
}
