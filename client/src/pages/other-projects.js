import Head from "next/head";
import MenuBar from "../components/menu-bar";
import Link from "next/link";

export default function OtherProjects() {
  return (
    <>
      <Head>
        <title>Other Projects</title>
      </Head>
      <div className="topSection generalText">
        <h1>Other Projects</h1>
        <h3>
          <Link href="https://indulgentcreativity.blogspot.com/">
            Indulgent Creativity
          </Link>
        </h3>
        <p>
          I have a few other things going on. Notably, I'm working on building
          an RPG in Unity, but it's still a long ways out from release.
          Indulgent Creativity is a blog where I outline many of my thoughts on
          game design.
        </p>
        <h3>Upcoming</h3>
        <p>
          There are a few other things cooking. I am excited to update this when
          they are added, but for now I have to leave it here.
        </p>
      </div>
    </>
  );
}
