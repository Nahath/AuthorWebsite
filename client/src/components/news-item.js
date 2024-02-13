import ReactHtmlParser from "react-html-parser";

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
      {/* <div
        dangerouslySetInnerHTML={{ __html: this.htmlDecode(newsData.details) }}
      /> */}
      <div>{ReactHtmlParser(newsData.details)}</div>
    </div>
  );
}
