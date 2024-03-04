import Image from "next/legacy/image";
import multiFormatCover from "../../public/images/MultiFormatBook.png";
import singleFormatCover from "../../public/images/PrintBook.png";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Pitch({ useSingleFormat }) {
  const [showChapter1Link, setShowChapter1Link] = useState(true);

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (pathname === "/") {
      setShowChapter1Link(true);
    } else {
      setShowChapter1Link(false);
    }
  }, [pathname]);

  return (
    <>
      <div className="pitch">
        <div className="imageContainer">
          <Image
            layout="responsive"
            src={useSingleFormat ? singleFormatCover : multiFormatCover}
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
// src="/images/ILikeMonstersCover.jpg"
