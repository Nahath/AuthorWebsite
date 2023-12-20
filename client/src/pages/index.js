import Head from "next/head";
import styles from "../styles/Home.module.css";
import Pitch from "../components/pitch";
import NewsContainer from "../components/news-container";

export default function Home() {
  return (
    <>
      <Pitch />
      <NewsContainer />
    </>
  );
}
