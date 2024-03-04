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
        title: "Book 2 Status",
        details:
          "<p>I am happy with most of my outline as I seek to balance character and conflict depth with the fun lighthearted tone I established in the first book.</p><p>The only remaining hang-up is that I have a critical event that I haven't quite figured out all the setup for. It's easy to set up a mediocre version, but I really need it to hit. I don't have a target release date, yet, but I will update here when I do.</p>",
        date: "January 29, 2024",
      },
      {
        title: "We Are Live",
        details:
          "<p>Our website has entered the world to great fanfare and rejoicing.</p>",
        date: "January 4, 2024",
      },
    ],
  };
  newsItems = tempNewsItems.newsItems;
  return (
    <div className="newsContainer">
      <div className="newsHeader">Latest News</div>
      {newsItems.map((item) => {
        return <NewsItem newsData={item} key={item.title} />;
      })}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
