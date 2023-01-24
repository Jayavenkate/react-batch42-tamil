import "./App.css";

export default function App() {
  return (
    <div className="App">
     <Msg name="Jaya"
     pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6FTuThyL6wj5Z8PxoHJvAw3ivhHLlu1ckuw&usqp=CAU"
     />
     <Msg name="Kuttuma"
     pic="https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw"
     />
     <Msg name="Venkat"
     pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
     />
     </div>
  );
}
function Msg({pic,name}){
  
  // JSX starts here
  return (
    <div>
<img className="user-pic"src={pic} 
alt={name}/>
   <h1>
  Hello, <span className= "user-name">{name}</span>😍🌹😘💖
  </h1>
  </div>
);
// JSX ends here
}
