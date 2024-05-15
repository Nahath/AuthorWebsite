import Head from "next/head";
import Image from "next/image";
import joshHead from "../../public/images/JoshHead.jpg";

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>Meet the Author</title>
      </Head>
      <div className="topSection">
        <h1>About Me</h1>
        <Image
          width={230}
          height={385}
          className="aboutMeImage"
          layout="fixed"
          src={joshHead}
        />
        <div className="authorBio">
          <p>
            If you saw me at recess in grade school, I was probably reading a
            book or perhaps introducing other kids to the joys of tabletop
            RPG--usually a game of my own invention.
          </p>
          <p>
            As an adult, I work in the software industry with an emphasis on
            games and VR development. With a wife and three kids, games and
            books are no longer my primary focus, but I still fit in time to
            continue pursuing my creative passions.
          </p>
        </div>
      </div>
      <div className="forceBelow"></div>
    </>
  );
}
