import { CellStatus } from './cell-status.model';
import { Cell } from './cell.model';

export class Board {
  matrix: Cell[][];

  constructor(boardTemplate: CellStatus[][]) {
    this.matrix = this.buildBoard(boardTemplate);
  }

  buildBoard(boardTemplate: CellStatus[][]) {
    const board: Cell[][] = [];

    for (const [i, row] of boardTemplate.entries()) {
      const rows: Cell[] = [];
      for (const [j, col] of row.entries()) {
        rows.push(new Cell(col, i, j));
      }

      board.push(rows);
    }
    return board;
  }

  getPossibleMovements(cell: Cell): Cell[] {

    // TODO: Mejorar codigo, hay mucha repeticion
    
    const possibleMovements: Cell[] = [];
    const numRows = this.matrix.length;
    const numCols = this.matrix[0].length;

    // Verificar celda a la derecha
    if (
      cell.xPosition + 1 < numRows &&
      this.matrix[cell.xPosition + 1][cell.yPosition].status ===
        CellStatus.TAKEN
    ) {
      if (
        cell.xPosition + 2 < numRows &&
        this.matrix[cell.xPosition + 2][cell.yPosition].status ===
          CellStatus.EMPTY
      ) {
        possibleMovements.push(this.matrix[cell.xPosition + 2][cell.yPosition]);
      }
    }

    // Verificar celda a la izquierda
    if (
      cell.xPosition - 1 >= 0 &&
      this.matrix[cell.xPosition - 1][cell.yPosition].status ===
        CellStatus.TAKEN
    ) {
      if (
        cell.xPosition - 2 < numRows &&
        this.matrix[cell.xPosition - 2][cell.yPosition].status ===
          CellStatus.EMPTY
      ) {
        possibleMovements.push(this.matrix[cell.xPosition - 2][cell.yPosition]);
      }
    }

    // Verificar celda abajo
    if (
      cell.yPosition + 1 < numCols &&
      this.matrix[cell.xPosition][cell.yPosition + 1].status ===
        CellStatus.TAKEN
    ) {
      if (
        cell.yPosition + 2 < numRows &&
        this.matrix[cell.xPosition][cell.yPosition + 2].status ===
          CellStatus.EMPTY
      ) {
        possibleMovements.push(this.matrix[cell.xPosition][cell.yPosition + 2]);
      }
    }

    // Verificar celda arriba
    if (
      cell.yPosition - 1 >= 0 &&
      this.matrix[cell.xPosition][cell.yPosition - 1].status ===
        CellStatus.TAKEN
    ) {
      if (
        cell.yPosition - 2 < numRows &&
        this.matrix[cell.xPosition][cell.yPosition - 2].status ===
          CellStatus.EMPTY
      ) {
        possibleMovements.push(this.matrix[cell.xPosition][cell.yPosition - 2]);
      }
    }

    return possibleMovements;
  }

  moveCell(){
    // TODO: Implementar funcion para mover celda y comer pieza
  }
}
