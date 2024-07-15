import Head from "next/head";
import Pitch from "../components/pitch";
import NewsContainer from "../components/news-container";
import Link from "next/link";
import Banner from "../components/banner";
import MenuBar from "../components/menu-bar";
import MenuBarWrapper from "../components/menu-bar-wrapper";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Joshua McDonald Home Page" />
        <meta
          property="og:description"
          content="Author of I Like Monsters (Except my Teacher)"
        />
        <meta property="og:image" content="../../public/images/PrintBook.png" />
      </Head>
      <div className="topSection">
        <Banner />
        <MenuBar />
        <Pitch showChapter1Link={true} />
      </div>
      <div className="bottomSection">
        <div className="bottomContent">
          <NewsContainer />
        </div>
      </div>
    </>
  );
}
