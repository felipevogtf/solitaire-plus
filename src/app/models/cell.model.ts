import { CellStatus } from './cell-status.model';

export class Cell {
  status: CellStatus;
  xPosition: number;
  yPosition: number;

  constructor(status: CellStatus, x: number, y: number) {
    this.status = status;
    this.xPosition = x;
    this.yPosition = y;
  }
}
