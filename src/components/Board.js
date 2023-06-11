import React from 'react';

import Box from './box';
import "./Board.css";
const Board=({board,pintu})=>{
    return (

        <div className='board'>
{
    board.map((value,idx)=>{
        return <Box value={value} onClick={()=>value===null && pintu(idx)}/>
    })
}

        </div>
    );
}
export default Board;