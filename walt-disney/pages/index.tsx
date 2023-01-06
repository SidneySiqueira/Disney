import Head from "next/head";
import PageMain from "../components/Home";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Disney</title>
        <link rel="icon" href="https://imagensemoldes.com.br/wp-content/uploads/2018/03/Turma-do-Mickey-Mickey-Rosto-Png.png" />
      </Head>
      <main>
        <PageMain />
      </main>
    </>
  );
}
