
import React from 'react'
import './Navbar.css'

const Navbar = ({ handleLength, handleSpeed, handleAlgo, generateRandomArray, handleSort, sorting, completed, len, speed, algo }) =>{

    return (
        <nav>
            <button className= 'btn1'  onClick={generateRandomArray} disabled={sorting}>Generate New Array</button>

            <div className='toolbox'>
                <div>
                    <div className='group speed'>
                        <label>Speed</label>
                        <input type='range' onChange={handleSpeed} min='1' max='10' value={Math.ceil(400 / speed)} disabled={sorting}></input>
                    </div>

                    <div className='group length'>
                        <label>Length</label>
                        <input type='range' onChange={handleLength} min='5' max={100} step='1' disabled={sorting} value={len}></input>
                    </div>
                    
                    <button className='btn' value='mergeSort' onClick={handleAlgo} disabled={sorting}>Merge Sort</button>
                    <button className='btn' value='quickSort' onClick={handleAlgo} disabled={sorting}>Quick Sort</button>

                    {/* <select onChange={handleAlgo} disabled={sorting} value={algo}>
                        <option value='bubbleSort'>Bubble Sort</option>
                        <option value='insertionSort'>Insertion Sort</option>
                        <option value='selectionSort'>Selection Sort</option>
                        <option value='mergeSort'>Merge Sort</option>
                        <option value='quickSort'>Quick Sort</option>
                    </select> */}
                </div>
                
                <div>
                    <button className='btn' value='bubbleSort' onClick={handleAlgo} disabled={sorting}>Bubble Sort</button>
                    <button onClick={handleSort} disabled={sorting || completed}>Sort</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar