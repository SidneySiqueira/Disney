import Head from "next/head";
import React from "react";
import Characters from "../../components/Characters";

export default function PageInformation() {
  return (
    <>
      <Head>
        <title>Disney-Characters</title>
        <link
          rel="icon"
          href="https://imagensemoldes.com.br/wp-content/uploads/2018/03/Turma-do-Mickey-Mickey-Rosto-Png.png"
        />
      </Head>
      <Characters />
    </>
  );
}
