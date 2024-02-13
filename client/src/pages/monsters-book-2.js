import Head from "next/head";
import Image from "next/image";
import notBookCover from "../../public/images/NotTheCover.png";

export default function MonstersBook2() {
  return (
    <>
      <Head>
        <title>Monsters Book 2</title>
        <link href="https://fonts.cdnfonts.com/css/luminari" rel="stylesheet" />
      </Head>
      <div className="pitch">
        <div className="imageContainer">
          <Image layout="responsive" src={notBookCover} />
        </div>

        <h2>Book 2</h2>
        <p>
          Yes, I am working on a sequel to I Like Monsters. The outlining is
          mostly finished, but there are a few details I need to figure out to
          create what I want it to be.
        </p>
        <p>
          Typically for me, the outlining is the longest part of the writing
          process. The first draft goes fast, and the revision is in between.
        </p>
        <p>I'll update this page when I start drafting.</p>
      </div>
    </>
  );
}
