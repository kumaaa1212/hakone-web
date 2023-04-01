import Link from "next/link";
import Layout from "../layout/Layout";
const Online = () => {
  return (

    <Layout>
      <div className="w-full mb-32">
        <h1 className="text-center text-4xl mt-8">本サイトに掲載の陶器は全てオンラインショップにて購入可能です</h1>
        <div className="w-full">
          <div className="text-center mb-14">
            <h1 className="text-3xl mt-8">ONLINE SHOP</h1>
            <Link href='https://www.shopify.com/jp'>
              <button className="bg-green-900 hover:bg-green-800 text-white rounded px-4 py-2 w-44 mt-8">
                詳細
              </button>
            </Link>
          </div>
          <img src="/onlineimg.jpg" className="w-160 h-64 block text-center mx-auto object-cover" />
        </div>
      </div>
    </Layout>
  )
}




export default Online;