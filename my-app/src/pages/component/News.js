import Link from "next/link"
import { client } from "../../../libs/client"
import Layout from "../layout/Layout"
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'news',
  })
  return {
    props: {
      blog: data.contents
    }
  }
}
const News = ({ blog }) => {
  return (
    <>
      <Layout>
        <div className="mb-32 mt-20 text-center">
          {blog.map((blog) => (
            <div key={blog.id} className="mt-12">
              <h1 className="text-3xl border-l-8 border-black">
                {blog.title}
              </h1>
              <Link href={blog.id}>
                <button className="bg-green-900 hover:bg-green-800 text-white rounded px-4 py-2 w-44 mt-8">
                  詳細
                </button>
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}
export default News;