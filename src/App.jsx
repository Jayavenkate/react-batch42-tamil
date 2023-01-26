import "./App.css";
import { useState } from "react";

export default function App() {
  const names=["Sethupathi","Gowtham","Ajith"]
  const users=[
    {
      name:"Jaya",
       pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6FTuThyL6wj5Z8PxoHJvAw3ivhHLlu1ckuw&usqp=CAU"
    },
    {
      name:"Kuttuma",
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" 
    },
    {
      name:"Venkat",
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" 
    },
  ];
  return (
    <div className="App">
      {users.map((usr) => (
        <Msg name={usr.name} pic={usr.pic} />
      ))}

      
     {/* <Msg name="Jaya"
     pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6FTuThyL6wj5Z8PxoHJvAw3ivhHLlu1ckuw&usqp=CAU"
     />
     <Msg name="Kuttuma"
     pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
     />
     <Msg name="Venkat"
     pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
     /> */}
     {/* <Welcome name="Sethupathi"/>
     <Welcome name="Gowtham"/>
     <Welcome name="Ajith"/> */}
    {/* //  {names.map((nm) => (
    //   <Welcome name={nm} />
    //  ))} */}
    {/* <Counter /> */}
     </div>
  );
}
function Counter(){
 const [like,setLike]=useState(0);
 const [dislike,setDisLike]=useState(0);
  return(
    <div>
        <button onClick={()=>setLike(like+1)}>
        👍{like}</button>
        <button onClick={()=>setDisLike(dislike+1)}>
        👎{dislike}</button>
    </div>
  )
}

function Msg({pic, name}) {
  
//   // JSX starts here
  return (
    <div>
<img className="user-pic"src={pic} 
alt={name}/>
   <h1>
       Hello, <span className= "user-name">{name}</span>😍🌹😘💖
   </h1>
   <Counter />
   </div>
);
// // JSX ends here
}
