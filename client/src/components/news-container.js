import NewsItem from "./news-item";
import newsData from "../../data/NewsData";

// newsItems is thus:
// {
//     newsItems: [
//         {
//             title:,
//             details:
//         },
//         {
//             title:,
//             details:
//         }
//     ]
// }

export default function NewsContainer() {
  // export default function NewsContainer({ newsItems }) {
  let newsItems = newsData.items;

  return (
    <div className="newsContainer">
      <div className="newsHeader">Latest News</div>
      {newsItems.map((item) => {
        return <NewsItem newsData={item} key={item.id} />;
      })}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
