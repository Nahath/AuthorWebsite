import { PortableText } from '@portabletext/react'
import Link from 'next/link'

function formatDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function NewsItem({ newsData }) {
  return (
    <div className="newsItem">
      <h2>{newsData.title}</h2>
      <div className="dateDisplay">{formatDate(newsData.date)}</div>
      {newsData.intro ? (
        <>
          <PortableText value={newsData.intro} />
          <Link href={`/news/${newsData.slug}`}>Continue reading →</Link>
        </>
      ) : (
        <PortableText value={newsData.details} />
      )}
    </div>
  )
}
