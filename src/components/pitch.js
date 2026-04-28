import Image from "next/image";
import multiFormatCover from "../../public/images/MultiFormatBook.png";
import singleFormatCover from "../../public/images/PrintBook.png";
import Link from "next/link";

export default function Pitch({ useSingleFormat, showChapter1Link }) {
  return (
    <>
      <div className="pitch">
        <div className="imageContainer">
          <Image
            alt="I Like Monsters book cover"
            src={useSingleFormat ? singleFormatCover : multiFormatCover}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="pitchText">
          <div className="fancyTitle">
            <div className="title-i-like">I Like</div>
            <br />
            <div className="title-monsters">Monsters</div>
            <br />
            <div className="title-except-my-teacher">(except my teacher)</div>
          </div>
          <p>
            Sebastian's skills and reputation for trouble-making become valuable
            when his sixth-grade class is threatened by a supernatural menace.
          </p>
          <p>
            Monsters in human form, known as Morugs, have infiltrated the school
            faculty in an attempt to find the Arkus, the student who has
            inherited the power to stop them. Sebastian and his friends have to
            undermine their plans and find the Arkus first, all without
            revealing what they know.
          </p>

          {showChapter1Link ? (
            <Link href="/i-like-monsters#chapter1" className="chapter-1-link">
              Read Chapter 1
            </Link>
          ) : null}
        </div>
      </div>
      <div className="forceBelow"></div>
    </>
  );
}
