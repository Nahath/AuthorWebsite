import Layout from "../../components/layout";
import { GetAllPostIds, GetPostData } from "../../lib/posts";

export default function News({ newsData }) {
  return (
    <div>
      <h1>{newsData.title}</h1>
      <div className="dateDisplay">{newsData.date}</div>
      <div>{newsData.details}</div>
    </div>
  );
}

// GetStaticPaths gets all valid IDs to represent possible pages
export async function getStaticPaths() {
  const paths = GetAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// GetStaticProps gets the data to render a page given a valid ID (found by GetStaticPaths above).
export async function getStaticProps({ params }) {
  const newsData = GetPostData(params.id);
  return {
    props: { newsData },
  };
}
