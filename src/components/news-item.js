import ReactHtmlParser from "react-html-parser";
import React, { useState, useEffect } from "react";

//newsData is thus:
// {
//    id:,
//    title:,
//    details:,
//    date:
// }
export default function NewsItem({ newsData }) {
  // const [introDetails, setIntroDetails] = useState(newsData.details);

  // useEffect(() => {
  //   const maxLength = 200;
  //   if (introDetails.length > maxLength) {
  //     // Finding the last space before max length - 20 and cutting off the post there. I'm doing the -20 because if I'm only a couple characters over max length,
  //     // I don't want them to click for the rest of the news item and not actually see any new content.
  //     let index = maxLength - 20;
  //     while (introDetails.charAt(index) !== " ") {
  //       index--;
  //     }
  //     let tempIntroDetails = introDetails;
  //     tempIntroDetails = introDetails.substring(0, index);
  //     tempIntroDetails += `...<br /> <a href="news/${newsData.id}">Continue reading -></a>`;
  //     setIntroDetails(tempIntroDetails);
  //   }
  // });

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
      {/* <div
        dangerouslySetInnerHTML={{ __html: this.htmlDecode(newsData.details) }}
      /> */}
      <div>{ReactHtmlParser(intro)}</div>
    </div>
  );
}
