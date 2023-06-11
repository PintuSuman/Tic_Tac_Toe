import React from 'react';
import './ResetButton.css';

const ResetButton=({resetboard})=>{
return (
<>


<button className='reset-btn' onClick={resetboard}>RESET</button>

    </>
)
}

export default ResetButton;