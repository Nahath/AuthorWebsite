import Head from "next/head";
import Pitch from "../components/pitch";
import Chapter1 from "../components/chapter1";
import MenuBar from "../components/menu-bar";
import Link from "next/link";

export default function ILikeMonsters() {
  return (
    <>
      <Head>
        <title>I Like Monsters (Except My Teacher)</title>
      </Head>
      <div className="topSection">
        <Pitch useSingleFormat={true} />
      </div>
      <div className="bottomSection">
        <div className="bottomContent">
          <Chapter1 />
        </div>
      </div>
    </>
  );
}
