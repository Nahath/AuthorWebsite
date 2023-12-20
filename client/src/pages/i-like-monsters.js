import Head from "next/head";
import Pitch from "../components/pitch";

export default function ILikeMonsters() {
  return (
    <>
      <Head>
        <title>I Like Monsters (Except My Teacher)</title>
        <link href="https://fonts.cdnfonts.com/css/luminari" rel="stylesheet" />
      </Head>
      <h2>I Like Monsters (Except My Teacher)</h2>
      <Pitch />
      <div>
        First chapter goes here. Make sure it has a tag for direct linking.
      </div>
    </>
  );
}
