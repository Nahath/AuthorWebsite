import NewsItem from './news-item'

export default function NewsContainer({ newsItems }) {
  return (
    <div className="newsContainer">
      <div className="newsHeader">Latest News</div>
      {newsItems.map((item) => (
        <NewsItem newsData={item} key={item._id} />
      ))}
    </div>
  )
}
