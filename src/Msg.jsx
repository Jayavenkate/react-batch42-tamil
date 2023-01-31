import { Counter } from "./Counter";

function Msg({ pic, name }) {

  //   // JSX starts here
  return (
    <div>
      <img className="user-pic" src={pic}
        alt={name} />
      <h1>
        Hello, <span className="user-name">{name}</span>😍🌹😘💖
      </h1>
      <Counter />
    </div>
  );
  // // JSX ends here
}
