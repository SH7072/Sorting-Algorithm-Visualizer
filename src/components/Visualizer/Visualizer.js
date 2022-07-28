import React from "react";
import "./Visualizer.css";

const vis = ({algo}) => {
    return (
        <div className='visualizer'>
            <div className='key'> 
                <span className='sq compare'></span> Compare
            </div>
            <div className='key'> 
                <span className='sq swap'></span> {algo !== 'mergeSort' ? 'Swap' : 'Taking From Auxillary Space'}
            </div>
            <div className='key'> 
                <span className='sq sorted'></span> Sorted
            </div>
        </div>
    )
}

export default vis;