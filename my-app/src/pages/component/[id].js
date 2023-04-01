import { client } from "../../../libs/client";
export const getStaticPaths = async() =>{
  const data = await client.get({
    endpoint:'news'});
    const paths = data.contents.map((content) =>  {
      return{
        params:{
          id:content.id
        }
      }
    })
    return{
      paths,
      fallback:false,
    }
}
export const getStaticProps = async({params}) =>{
  console.log(params);
  const data = await client.get({
    endpoint: 'news',
    contentId: params.id,
  })
  return{
    props:{
      blog:data
    }
  }
}
export default function Blogdata ({blog}) {
  console.log(blog)
  return(
    <main className="bg-primary h-screen">
    <div className="container mx-auto text-fontcolor font-common">
    <h1 className='text-4xl text-center py-12'>{blog.title}</h1>
    <div dangerouslySetInnerHTML={{__html:`${blog.content}`}}>
    </div>
    </div>
    </main>
  )
}
