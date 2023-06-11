import React from 'react';

import './ScoreBoard.css';


const ScoreBoard=({scores,xplaying})=>{
    const {xscore,oscore}=scores;
    return(

        
       <div className='scoreboard'>
    <span className={`score x-score ${!xplaying && "inactive"}`}>X-{xscore}</span>
    <span className={`score o-score ${xplaying && "inactive"}`}>O-{oscore}</span>



       </div>


        
    )
}

export default ScoreBoard