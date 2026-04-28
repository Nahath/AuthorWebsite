import ReactHtmlParser from "react-html-parser";
import React from "react";

//newsData is thus:
// {
//    id:,
//    title:,
//    details:,
//    date:
// }
export default function NewsItem({ newsData }) {

  let intro;

  if (newsData.intro) {
    intro =
      newsData.intro +
      `<br /> <a href="news/${newsData.id}">Continue reading -></a>`;
  } else {
    intro = newsData.details;
  }

  return (
    <div className="newsItem">
      <h2>{newsData.title}</h2>
      <div className="dateDisplay">{newsData.date}</div>
      <div>{ReactHtmlParser(intro)}</div>
    </div>
  );
}
