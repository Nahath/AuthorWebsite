import Head from "next/head";
import Pitch from "../components/pitch";
import NewsContainer from "../components/news-container";
import Link from "next/link";
import Banner from "../components/banner";
import MenuBar from "../components/menu-bar";

export default function Home() {
  return (
    <>
      <div className="topSection">
        <Banner />
        <MenuBar />
        <Pitch />
      </div>
      <div className="bottomSection">
        <div className="bottomContent">
          <NewsContainer />
        </div>
      </div>
    </>
  );
}
