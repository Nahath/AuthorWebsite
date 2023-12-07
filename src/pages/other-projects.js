import Head from "next/head";
import MenuBar from "../components/menu-bar";

export default function OtherProjects() {
  return (
    <>
      <Head>
        <title>Other Projects</title>
        <link href="https://fonts.cdnfonts.com/css/luminari" rel="stylesheet" />
      </Head>
      <ul>
        <li>Game Design Blog</li>
        <li>Developer Portfolio</li>
      </ul>
    </>
  );
}
