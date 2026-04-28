import Image from "next/image";

export default function BookRecommendation({ bookInfo }) {
  return (
    <div className="book-recommendation">
      <h3>{bookInfo.title}</h3>
      <Image fill={true} alt={bookInfo.title} src={bookInfo.link} />
      <p>{bookInfo.description}</p>
    </div>
  );
}
