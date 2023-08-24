function printMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      console.log(matriz[i].join('\t'));
    }
  }
  
  function transposeMatriz(matriz) {
    const rows = matriz.length;
    const cols = matriz[0].length;
    const transposed = [];
  
    for (let j = 0; j < cols; j++) {
      transposed[j] = [];
      for (let i = 0; i < rows; i++) {
        transposed[j][i] = matriz[i][j];
      }
    }
  
    return transposed;
  }
  
  function createMatriz(rows, cols) {
    const matriz = [];
    let counter = 1;
  
    for (let i = 0; i < rows; i++) {
      matriz[i] = [];
      for (let j = 0; j < cols; j++) {
        matriz[i][j] = counter++;
      }
    }
  
    return matriz;
  }
  
  const numRows = 3;
  const numCols = 4;
  const originalMatriz = createMatriz(numRows, numCols);
  
  console.log("Matriz Original:");
  printMatriz(originalMatriz);
  
  const transposedMatriz = transposeMatriz(originalMatriz);
  console.log("\nMatriz Transposta:");
  printMatriz(transposedMatriz);
  