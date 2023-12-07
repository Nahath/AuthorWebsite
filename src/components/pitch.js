import Image from "next/image";
import bookCover from "../../public/images/ILikeMonstersCover.jpg";

export default function Pitch() {
  return (
    <div className="pitch">
      <div className="imageContainer">
        <Image layout="responsive" src={bookCover} />
      </div>
      <p>A great book. Read it.</p>
    </div>
  );
}
// src="/images/ILikeMonstersCover.jpg"
