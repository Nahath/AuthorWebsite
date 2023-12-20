import NewsItem from "./news-item";

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

export default function NewsContainer({ newsItems }) {
  var tempNewsItems = {
    newsItems: [
      {
        title: "First",
        details: "Turkeys are our friends",
        date: "August 10, 2023",
      },
      {
        title: "Second",
        details:
          "This is a much longer news item. Many many many things go here. This is a much longer news item. Many many many things go here.",
        date: "September 9, 2023",
      },
    ],
  };
  newsItems = tempNewsItems.newsItems;
  return (
    <div className="newsContainer">
      <h1>Latest Updates</h1>
      {newsItems.map((item) => {
        return <NewsItem newsData={item} />;
      })}
    </div>
  );
}
