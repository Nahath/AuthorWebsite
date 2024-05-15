import Image from "next/image";

export default function BookRecommendation({ bookInfo }) {
  <div className="book-recommendation">
    <h3>{bookInfo.title}</h3>
    <Image fill={true} src={bookInfo.link} />
    <p>{bookInfo.description}</p>
  </div>;
}
