import { ExperienceData } from '../../SiteData'
const Curse = () => {
  return (
    <div >
      <h1 className='text-center text-4xl my-16'>体験コース</h1>
      <div className='grid grid-cols-2 gap-4'>
        {ExperienceData.map((data) => (
          <div>
            <p className='text-2xl text-center font-bold mb-4'>
              {data.title}
            </p>
            <div>
              <img src={data.imgData} />
              <div className='text-1xl mt-3'>
                <p>{data.content1}</p>
                <p>{data.content2}</p>
                <p>{data.content3}</p>
                <p>{data.content4}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-12'>
        <h1 className='text-center mb-9 text-3xl select-none'>注意事項</h1>
        <p className='text-2xl select-none'>・粘土の準備もございますのでなるべくご予約下さい。</p>
        <p className='text-2xl'>・粘土自体に色がついておりますのでその色を生かすために透明釉をかけます。</p>
        <p className='text-2xl select-none'>・素材の色を損なわない程度に、部分的に白の釉薬をかけることも出来ます</p>
      </div>
    </div>
  );
}
export default Curse;