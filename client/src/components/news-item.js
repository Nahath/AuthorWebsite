import ReactHtmlParser from "react-html-parser";

//newsData is thus:
// {
//    title:,
//    details:,
//    date:
// }
export default function NewsItem({ newsData }) {
  let introDetails = newsData.details;
  const maxLength = 200;

  if (introDetails.length > maxLength) {
    // Finding the last space before max length - 20 and cutting off the post there. I'm doing the -20 because if I'm only a couple characters over max length,
    // I don't want them to click for the rest of the news item and not actually see any new content.
    let index = maxLength - 20;
    while (introDetails.charAt(index) !== " ") {
      index--;
    }
    introDetails = introDetails.substring(0, index);
    introDetails += '...<br /> <a href="fish">Continue reading -></a>';
  }

  return (
    <div className="newsItem">
      <h2>{newsData.title}</h2>
      <div className="dateDisplay">{newsData.date}</div>
      {/* <div
        dangerouslySetInnerHTML={{ __html: this.htmlDecode(newsData.details) }}
      /> */}
      <div>{ReactHtmlParser(introDetails)}</div>
    </div>
  );
}
