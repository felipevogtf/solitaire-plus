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
}
