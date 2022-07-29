import React, { useState, useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar.js';
import Bars from './components/Bars/Bars.js';
import Visualizer from './components/Visualizer/Visualizer';

import bubbleSort from './Algorithm/bubbleSort.js';
import mergeSort from './Algorithm/mergeSort.js';
import quickSort from './Algorithm/quickSort.js';

function App() {
  const generateRandomArray = (len) => {
    setCompleted(false)
    setSorting(false)
    setSortedIndex([])

    const randomArray = Array.from(Array(len + 1).keys()).slice(1)

    for (let i = randomArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i - 1))
      const temp = randomArray[i]

      randomArray[i] = randomArray[randomIndex]
      randomArray[randomIndex] = temp
    }

    setBars(randomArray)
  }

  // States
  const [algo, setAlgo] = useState('bubbleSort')
  const [len, setLength] = useState(30)
  const [bars, setBars] = useState([])
  const [sorting, setSorting] = useState(false)
  const [completed, setCompleted] = useState(true)
  const [speed, setSpeed] = useState(250)
  const [compare, setCompare] = useState([])
  const [swap, setSwap] = useState([])
  const [sortedIndex, setSortedIndex] = useState([])

  useEffect(() => {
    generateRandomArray(len)
  }, [len, algo])

  const handleAlgo = (event) => {
    setAlgo(event.target.value)
  }

  const handleLength = (event) => {
    setLength(Number(event.target.value))
  }

  const handleSpeed = (event) => {
    setSpeed(Math.ceil(400 / Number(event.target.value)))
  }

  const handleSort = () => {

    const sortAccOrder = (sortedarr) => {
      (function loop(i) {
        setTimeout(function () {
          const [j, k, arr, index] = sortedarr[i]
          setCompare([j, k])
          setSwap([])

          if (index !== null) {
            setSortedIndex((prevState) => (
              [...prevState, index]
            ))
          }

          if (arr) {

            setBars(arr)
            if (j !== null || k != null)
              setSwap([j, k])

          }

          if (++i < sortedarr.length) {
            loop(i)
          } else {
            setSorting(false)
            setCompleted(true)
          }
        }, speed)
      })(0)

    }

    setSorting(true)

    algo === 'bubbleSort' ? sortAccOrder(bubbleSort(bars)) :
      algo === 'mergeSort' ? sortAccOrder(mergeSort(bars)) :
        algo === 'quickSort' ? sortAccOrder(quickSort(bars)) : (() => {
          setSorting(false)
          setCompleted(true)
        })()
  }

  return (
    <div className="App">
      <Navbar
        generateRandomArray={() => generateRandomArray(len)}
        handleLength={handleLength}
        handleSpeed={handleSpeed}
        handleAlgo={handleAlgo}
        handleSort={handleSort}
        sorting={sorting}
        completed={completed}
        len={len}
        speed={speed}
        algo={algo}
      />

      <Bars
        bars={bars}
        compare={sorting && compare}
        swap={sorting && swap}
        sorted={sortedIndex}
      />

      <Visualizer algo={algo} />
    </div>
  );
}

export default App;
