"use client"
import { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';


export default function Page() {
  const [gridLength, setGridLength] = useState<number>(3)
  const [grid, setGrid] = useState<number[][]>(initGrid())

  function initGrid() {
    const newGrid: number[][] = []
    for (let i = 0; i < gridLength; i++) {
      let arr: number[] = []
      for (let j = 0; j < gridLength; j++) {
        arr.push(0)
      }
      newGrid.push(arr)
    }
    return newGrid
  }

  return (
    <table width={'80vw'} >
      <tbody>
        { grid.map((row, i) => (
          <tr key={i}>
            {
              row.map((e, j) => (
                <td key={j}>{e == 0? <input type="number" min={1} max={9} />: e}</td>
              )) 
            }
          </tr>
          
        )) }
      </tbody>
    </table>
    
  )
}
