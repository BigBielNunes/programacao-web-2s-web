function multiplyMatrices(matrixA, matrixB) {
    const numRowsA = matrixA.length;
    const numColsA = matrixA[0].length;
    const numRowsB = matrixB.length;
    const numColsB = matrixB[0].length;
  
    if (numColsA !== numRowsB) {
      console.log("Não é possível calcular a multiplicação das matrizes.");
      return;
    }
  
    const resultMatrix = [];
  
    for (let i = 0; i < numRowsA; i++) {
      resultMatrix[i] = [];
      for (let j = 0; j < numColsB; j++) {
        let sum = 0;
        for (let k = 0; k < numColsA; k++) {
          sum += matrixA[i][k] * matrixB[k][j];
        }
        resultMatrix[i][j] = sum;
      }
    }
  
    return resultMatrix;
  }
  
  function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      console.log(matrix[i].join('\t'));
    }
  }
  
  const matrixA = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  
  const matrixB = [
    [7, 8],
    [9, 10],
    [11, 12]
  ];
  
  console.log("Matriz A:");
  printMatrix(matrixA);
  
  console.log("\nMatriz B:");
  printMatrix(matrixB);
  
  console.log("\nResultado da Multiplicação:");
  const resultMatrix = multiplyMatrices(matrixA, matrixB);
  
  if (resultMatrix) {
    printMatrix(resultMatrix);
  }
  