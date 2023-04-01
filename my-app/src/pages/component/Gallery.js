import Layout from "../layout/Layout";
import { galleryimg1, galleryimg2, galleryimg3, subimages } from "../SiteData";
const Gallery = () => {
  return (
    <div className="">
      <Layout>
        <section className="my-20 border-b-2 border-black pb-24">
          <h1 className="text-4xl mb-8 border-l-8 border-black pl-4">藐姑射の土</h1>
          <div className="grid md:grid-cols-3 md:gap-3  sm:grid-cols-2 sm:gap-2 gap-4">
            {galleryimg1.map((img) => (
              <img src={img.name} key={img.id} className=' block mx-auto w-72'/>
            ))}
          </div>
        </section>
        <section className="my-20 border-b-2 border-black pb-24">
          <h1 className="text-4xl mb-8 border-l-8 border-black pl-4">十二支神像</h1>
          <div className="grid md:grid-cols-2 sm:grid-cols-2 md:gap-3 sm:gap-2 gap-4">
            {galleryimg2.map((img) => (
              <img src={img.name} key={img.id} className=" block mx-auto md:w-80 w-96"/>
            ))}
          </div>
        </section>

        <section className="my-20 border-b-2 border-black pb-24"> 
          <h1 className="text-4xl mb-8 border-l-8 border-black pl-4">江戸時代の子供たちのおもちゃ</h1>
          <div>
            {galleryimg3.map((img) => (
              <img src={img.name} key={img.id} className="block mx-auto md:w-80 w-96"/>
            ))}
          </div>
        </section>
        <section className="my-20">
          <div className="grid md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-2 gap-4">
          {subimages.map((img) => (
            <img src={img.name} key={img.id} className="block mx-auto md:w-80 w-96"/>
          ))}
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default Gallery;