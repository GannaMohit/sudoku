"use client"
import { useEffect, useState } from "react";
import { InputNumber } from 'primereact/inputnumber';
import { Slider } from "primereact/slider";
import { initialErrors, initialGrid, validGrid } from "./helper";
import dynamic from "next/dynamic";

export default function Page() {
  const [gridLength, setGridLength] = useState<number>(9)
  const [grid, setGrid] = useState<number[][]>(initialGrid)
  const [errors, setErrors] = useState<boolean[][]>(initialErrors)
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  // function handleLengthChange(value: number) {
  //   setGridLength(value)
  //   setGrid(initGrid(value))
  // }

  function handleMove(val: number, i:number, j:number) {
    let newGrid = JSON.parse(JSON.stringify(grid))
    let newErrors = [...errors]
    newGrid[i][j] = val
    console.log(newGrid)
    console.log("Is the grid valid?"+validGrid(newGrid, 9))
    if (validGrid(newGrid, 9) == true) {
      console.log("Does this run?")
      setGrid(newGrid)
      newErrors[i][j] = false
      setErrors(newErrors)
    }
    else {
      newErrors[i][j] = true
      setErrors(newErrors)
    }
  }
  if (isClient == false) {
    return (<h1>None</h1>)
  }
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
                    <td className="border-collapse border-1 align-items-center" key={j}>{e == 0? <InputNumber invalid={errors[i][j]} onChange={(event) => handleMove(event.value ?? 0, i, j)} inputClassName="w-1" min={1} max={9} className="border-none"/>: e}</td>
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
