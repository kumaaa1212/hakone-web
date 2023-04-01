import { useState } from "react";
import {questioncontent} from '../../SiteData';
const Question = () => {
  const [state,setstate] =useState(questioncontent);
  const handleshow = (id) =>{
    const handleList = state.map((note) =>{
      if(note.id === id){
        return{
          ...note,
          open:!note.open
        }
      }
      else{
      return{
        ...note,
        open:false
      }
      }
    })
    setstate(handleList);
  }
  return (
    <div className="mb-32">
      {state.map((data) =>(
        <div className="mt-12">
          <p onClick={() =>handleshow(data.id)} className='text-2xl cursor-pointer select-none'>{data.Q}</p>
          <p  className={data.open ? 'openlist' : 'closelist'} >{data.A}
          </p>
        </div>
      ))}
    </div>
  );
}
export default Question;