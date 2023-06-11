import React,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Box from './components/box';
import Board from './components/Board';
import ResetButton from './components/ResetButton';
import ScoreBoard from './components/ScoreBoard';


function App() {
 const  winnerCondition=[
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
];
  const [board,setboard]=useState(Array(9).fill(null));
  const [xplaying,setxplaying]=useState(true);
  const [scores,setscores]=useState({xscore:0,oscore:0});
  const[gameover,setgameover]=useState(false);
  const handleBoxClick=(boxId)=>{
    const updateBoard=board.map((value,idx)=>{
      if(idx===boxId){
        return xplaying===true?"X":"O";
      }
      else{
        return value;
      }
    });
    setboard(updateBoard);
    const win= winner(updateBoard);
    if(win){
      let {xscore,oscore}=scores;
      if(win==="O"){
        
         oscore+=1;
         setscores({...scores,oscore});
      }
      else{
       
        xscore+=1;
        setscores({...scores,xscore});
      }
     }
     console.log(scores);
      
   
    
    setxplaying(!xplaying);
  }
 
    
   

  const winner=(board)=>{
    for(let i=0;i<winnerCondition.length;i++){
      const[x,y,z]=winnerCondition[i]; 
      if(board[x] && board[y] && board[z] && board[x]===board[y] && board[y]===board[z]){
        setgameover(true);
        setboard(Array(9).fill(null));
        if(xplaying)
        toast.success('X win');
        if(!xplaying)
        toast.success('Y win');

        return board[x];
      }
    }

  }
  const resetboard=()=>{
    setgameover(false);
    setboard(Array(9).fill(null));
  }


  return (
    <>
<ScoreBoard  scores={scores} xplaying={xplaying}/>
    <Board board={board} pintu={gameover?resetboard:handleBoxClick}/>
   <ResetButton resetboard={resetboard}/>
    </>
  );
}

export default App;
