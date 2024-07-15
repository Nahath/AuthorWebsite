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
        <meta
          property="og:title"
          content="I Like Monsters (Except my Teacher)"
        />
        <meta
          property="og:description"
          content="A sixth grader using pranks to fight a supernatural menace"
        />
        <meta property="og:image" content="../../public/images/PrintBook.png" />
      </Head>
      <div className="topSection">
        <Pitch useSingleFormat={true} showChapter1Link={false} />
      </div>
      <div className="bottomSection">
        <div className="bottomContent">
          <Chapter1 />
        </div>
      </div>
    </>
  );
}
