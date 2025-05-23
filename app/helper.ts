export function hasRepeats(array: number[]) {
  const set = new Set()
  for (const element of array) {
    if (set.has(element)) {
      return true
    }
    else {
        if (element !== 0) {
            set.add(element)
        }
    }
  }
  return false
}

export function validGrid(grid: number[][], size:number) {
  // Check rows
  for (const row of grid) {
    if (hasRepeats(row) == true) {
      return false
    }
  }
  // Check columns
  for (let i = 0; i < size; i++) {
    let col = grid.map((row) => row[i])
    if (hasRepeats(col) == true) {
      return false
    }
  }

  // Check sqrt(size) *sqrt(size) grid
  const sqrtSize = Math.floor(Math.sqrt(size))
  for (let i = 0; i < sqrtSize; i++) {
    for (let j = 0; j < sqrtSize; j++) {
      const subGridFlat = [];
      for (let row = i * sqrtSize; row < (i + 1) * sqrtSize; row++) {
        for (let col = j * sqrtSize; col < (j + 1) * sqrtSize; col++) {
          subGridFlat.push(grid[row][col]);
        }
      }
      if (hasRepeats(subGridFlat)) {
        return false
      }
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

export function initGrid(size: number) {
  let newGrid = initGridHelper(size)
  while (!validGrid(newGrid, size)) {
    newGrid = initGridHelper(size)
  }
  return newGrid
}

export function initErrors(size:number) {
  const newErrors: boolean[][] = []
  
  for (let i = 0; i < size; i++) {
    let arr: boolean[] = []
    for (let j = 0; j < size; j++) {
      arr.push(false)
      
    }
    newErrors.push(arr)
  }

  return newErrors
}

export const initialGrid = initGrid(9)
export const initialErrors = initErrors(9)