//newsData is thus:
// {
//    title:,
//    details:,
//    date:
// }
export default function NewsItem({ newsData }) {
  return (
    <div className="newsItem">
      <h2>{newsData.title}</h2>
      <div className="dateDisplay">{newsData.date}</div>
      <div>{newsData.details}</div>
    </div>
  );
}
