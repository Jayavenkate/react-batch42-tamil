import {useState}from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Button from '@mui/material/Button';

export function TicTacToe() {
  const { width, height } = useWindowSize()
  const [board,setBoard]= useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
]);
const[isXTurn,setIsXTurn]=useState(true);
  const handClick=(index)=>{
      console.log(index);
      if(!winner && board[index]==null){
        const boardCopy = [...board];
        boardCopy[index]=isXTurn ? "X" :"O" ;
      setBoard(boardCopy) ;
      setIsXTurn(!isXTurn);
      }
   
    };
    const decideWinner=(board)=>{
const lines=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];
for(let i=0;i<lines.length;i++){
  const[a,b,c]=lines[i];
 if(board[a]!==null && board[a]== board[b]&& board[b]==board[c]){
console.log("Winner",board[a]);
return board[a];
 }
}
return null;
    };

  const winner = decideWinner(board);
     
  const restartGame=()=>{
  setBoard([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    ])
    setIsXTurn(true);
  }
  return (
    <div className="tic-tac-toe">
      {winner? <Confetti
      width={width}
      height={height}
      gravity={0.02}
    />:null}
     
      <h1>TicTacToe Game</h1>
      <div className = "board">
      {board.map((val,index)=>(
        <GameBox val={val} onPlayerClick={()=>handClick(index)}/>
      ))}
        </div>
        <Button onClick={restartGame}variant="contained">Restart</Button>
        {winner?<h1>The Winner is:{winner}</h1>:null}
    </div>
  );
}
function GameBox({val,onPlayerClick}) {
  // const [val, setVal] = useState("")
  const styles={
    color: val==="X" ? "green":"red",
  };
  return <div style={styles} onClick={onPlayerClick} className="game-box">
     {val} </div>;
   
  
}
