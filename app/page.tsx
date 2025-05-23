"use client"
import { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';
import { Slider } from "primereact/slider";


export default function Page() {
  const [gridLength, setGridLength] = useState<number>(3)
  const [grid, setGrid] = useState<number[][]>(initGrid(gridLength))

  function initGrid(size: number) {
    const newGrid: number[][] = []
    for (let i = 0; i < size; i++) {
      let arr: number[] = []
      for (let j = 0; j < size; j++) {
        arr.push(0)
      }
      newGrid.push(arr)
    }
    return newGrid
  }

  function handleLengthChange(value: number) {
    setGridLength(value)
    setGrid(initGrid(value))
  }

  return (
    <div className="align-items-center">
      <Slider min={2} max={5} value={gridLength} onChange={(event) => handleLengthChange(typeof event.value == 'number' ? event.value: event.value[0])}/>

      <div className="align-items-center justify-content-center w-11 h-11">
        <table className="w-full h-full border-2 border-collapse">
          <tbody>
            { grid.map((row, i) => (
              <tr key={i} className="w-full h-full border-1 border-collapse">
                {
                  row.map((e, j) => (
                    <td className="border-collapse border-1 align-items-center" key={j}>{e == 0? <InputNumber min={1} max={9} className="border-none"/>: e}</td>
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
