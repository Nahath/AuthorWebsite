import { PortableText } from '@portabletext/react'
import sanityClient from '../../lib/sanityClient'

function formatDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export async function getStaticPaths() {
  const slugs = await sanityClient.fetch(
    `*[_type == "newsItem"]{ "slug": slug.current }`
  )
  return {
    paths: slugs.map((item) => ({ params: { id: item.slug } })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const newsData = await sanityClient.fetch(
    `*[_type == "newsItem" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      date,
      details
    }`,
    { slug: params.id }
  )

  if (!newsData) return { notFound: true }

  return {
    props: { newsData },
    revalidate: 60,
  }
}

export default function NewsDetail({ newsData }) {
  return (
    <div className="topSection">
      <h1>{newsData.title}</h1>
      <div className="dateDisplay">{formatDate(newsData.date)}</div>
      <PortableText value={newsData.details} />
    </div>
  )
}
