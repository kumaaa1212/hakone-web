import Link from "next/link";
import { useState } from "react";
import { MenuData } from "../SiteData";
const Layout = ({ children }) => {
  const [menustate,setmenustate] =useState(MenuData);
    const handleClick = (id) =>{
      const chengeMenu = menustate.map((data) =>{
        if(data.title === id){
          return{
            ...data,
            click:!data.click
          }
        }
        else{
          return{
            ...data,
            click:false
          }
        }
      })
      setmenustate(chengeMenu);
    }
  return (
    <div className="bg-primary font-body">
      <header className="bg-white">
        <ul className="flex h-14 leading-10 justify-between mx-1 items-center lg:mx-16">
          {menustate.map((data) => (
            <Link href={data.link} key={data.title} onClick={() =>handleClick(data.title)} >
              <li className="md:leading-12 md:text-2.2xl sm:text-1xl sm:leading-6 hover:border-gray-700 border-transparent border-b-2 mb-2">
                {data.title}
              </li>
            </Link>
          ))}
        </ul>
        <div>
          <img src='/mainimg1.jpg' className="w-full h-52 object-cover"/>
        </div>
      </header>
      <main className="container mx-auto text-fontcolor font-common">
        {children}
      </main>
      <footer className="bg-white text-center py-14">
        <p className=''>〒250-0522 神奈川県足柄下郡箱根町元箱根90-105</p>
        <p className=''><a href="tel:0460835004">TEL:0460-83-5004</a></p>
      </footer>
    </div>
  );
}
export default Layout;





// border border-indigo-600