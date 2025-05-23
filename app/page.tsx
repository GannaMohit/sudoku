"use client"
import { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';
import { Slider } from "primereact/slider";

function verifyGrid(grid: number[][], size:number) {
  for (let i = 0; i < size; i++) {
    // Used AI to quickly find a way to check duplicates
    if (grid[i].some((element, index) => element != 0 ? grid[i].indexOf(element) !== index: false)) {
      return false
    }
  }

  for (let i = 0; i < size; i++) {
    let col = grid.map((row) => row[i])
    // Used AI to quickly find a way to check duplicates
    if (col.some((element, index) => element != 0 ? col.indexOf(element) !== index: false)) {
      return false
    }
  }

  return true
}

function initGridHelper(size: number) {
  const newGrid: number[][] = []
  
  for (let i = 0; i < size; i++) {
    let arr: number[] = []
    for (let j = 0; j < size; j++) {
      if (Math.random() > 0.6) {
        arr.push(Math.floor(Math.random() * (9 - 1 + 1)) + 1)
      }
      else {
        arr.push(0)
      }
      
    }
    newGrid.push(arr)
  }

  return newGrid
}

function initGrid(size: number) {
  let newGrid = initGridHelper(size)
  while (!verifyGrid(newGrid, size)) {
    newGrid = initGridHelper(size)
  }
  return newGrid
}

let initialGrid = initGrid(9)

export default function Page() {
  const [gridLength, setGridLength] = useState<number>(9)
  const [grid, setGrid] = useState<number[][]>(initialGrid)

  // function handleLengthChange(value: number) {
  //   setGridLength(value)
  //   setGrid(initGrid(value))
  // }


  return (
    <div className="align-items-center">
      {/* <Slider min={2} max={5} value={gridLength} onChange={(event) => handleLengthChange(typeof event.value == 'number' ? event.value: event.value[0])}/> */}

      <div className="align-items-center justify-content-center w-11 h-11">
        <table className="w-full h-full border-2 border-collapse">
          <tbody>
            { grid.map((row, i) => (
              <tr key={i} className="w-full h-full border-1 border-collapse">
                {
                  row.map((e, j) => (
                    <td className="border-collapse border-1 align-items-center" key={j}>{e == 0? <InputNumber inputClassName="w-1" min={1} max={9} className="border-none"/>: e}</td>
                  )) 
                }
              </tr>
              
            )) }
          </tbody>
        </table>
      </div>
      

    </div>
    
  )
}
