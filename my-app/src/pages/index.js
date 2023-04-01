import Layout from "./layout/Layout";
export default function Home() {
  return (
    <>
      <Layout>
        <main className="w-full">
          <section className="text-center my-20 border-b-2 border-black pb-24">
            <h1 className="pt-16 text-4xl">唯一無二</h1>
            <p className="leading-12 mt-3">「なに焼きですか」と問われることがあります。「雄喜焼です」とお答えします。</p>
            <p className="leading-12">雄喜苑が独自開発した「藐姑射（はこや）の土」は,火山灰を多く含む箱根の土を掘り、精製された何処にもない粘土です。</p>
            <p className="leading-12">雄喜苑は、歴史を刻みながら常に新しく進み、それを提供していきたいと思っています。</p>
          </section>
          <section className="text-center my-20  pb-24">
            <h1 className="pt-16 text-4xl">
              歴史「ルーツとヒストリー」
            </h1>
            <p className="leading-12 mt-3">雄喜苑（ゆうきえん）は美術工芸家の宮森達雄が陶芸をはじめ
              日本画、油絵、彫刻、彫金などの美術工芸を教えるために作った横浜に古くからあるアトリエ（芸術サークル）です。
              雄喜苑を主催する宮森達雄が追求する歴史と唯一無二の体験をぜひお楽しみください。
            </p>
          </section>
        </main>
      </Layout>
    </>
  )
}

