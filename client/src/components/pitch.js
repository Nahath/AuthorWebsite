import Image from "next/image";
import bookCover from "../../public/images/MultiFormatBook.png";
import React from "react";
import Link from "next/link";

export default function Pitch() {
  let location = "";
  if (typeof window !== "undefined") {
    location = window.location.pathname;
  }

  // If I switch to using React Router, it will look like this:
  // import { useLocation } from 'react-router-dom';
  // const location = useLocation();

  return (
    <>
      <div className="pitch">
        <div className="imageContainer">
          <Image layout="responsive" src={bookCover} />
        </div>
        <div className="pitchText">
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

          <p>
            As the Morugs escalate their efforts to find and eliminate the
            Arkus, Sebastian begins learning of the experiences of those around
            him and finds that even the most ordinary people have fascinating
            stories to tell. And somewhere in one of those stories lies the key
            to defeating the Morugs.
          </p>

          {location.includes("i-like-monsters") ? null : (
            <h3 className="chapter-1-link">
              Read Chapter 1 <Link href="/i-like-monsters#chapter1">here</Link>
            </h3>
          )}
        </div>
      </div>
      <div className="forceBelow"></div>
    </>
  );
}
// src="/images/ILikeMonstersCover.jpg"
