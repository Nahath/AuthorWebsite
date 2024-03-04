import Head from "next/head";
import MenuBar from "../components/menu-bar";

export default function OtherProjects() {
  return (
    <>
      <Head>
        <title>Other Projects</title>
      </Head>
      <ul>
        <li key="IndulgentCreativity">Game Design Blog</li>
        <li key="DevPortfolio">Developer Portfolio</li>
      </ul>
    </>
  );
}
