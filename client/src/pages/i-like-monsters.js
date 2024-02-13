import Head from "next/head";
import Pitch from "../components/pitch";
import Chapter1 from "../components/chapter1";

export default function ILikeMonsters() {
  return (
    <>
      <Head>
        <title>I Like Monsters (Except My Teacher)</title>
        <link href="https://fonts.cdnfonts.com/css/luminari" rel="stylesheet" />
      </Head>
      <h2>I Like Monsters (Except My Teacher)</h2>
      <Pitch />
      <Chapter1 />
    </>
  );
}
