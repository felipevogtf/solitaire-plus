import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Board } from '@models/board.model';
import { DEFAULT_LEVEL } from '@data/levels.data';
import { Cell } from '@models/cell.model';
import { CellStatus } from '@models/cell-status.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'solitaire-plus';
  board: Board | undefined;
  possibleMovements: Cell[] = [];
  currentCell: Cell | undefined;

  ngOnInit() {
    this.board = new Board(DEFAULT_LEVEL);
  }

  /**
   * Obtiene la clase que tiene que tener una celda
   * @param cell
   * @returns clase para la celda
   */
  getCellClass(cell: Cell): string {
    // Verifica si la celda se encuentra en la lista de posibles movimientos
    if (
      this.possibleMovements.some(
        obj =>
          obj.xPosition === cell.xPosition && obj.yPosition === cell.yPosition
      )
    ) {
      return 'board__cell--suggest';
    }

    // Celda vacia
    if (cell.status === CellStatus.EMPTY) {
      return 'board__cell--empty';
    }

    // Celda con pieza
    if (cell.status === CellStatus.TAKEN) {
      return 'board__cell--taken';
    }

    return '';
  }

  /**
   * Obtiene los posibles movimientos del jugador, a partir de una celda
   * @param cell
   */
  getMovements(cell: Cell): void {
    if (!this.board) {
      return;
    }

    if (
      this.currentCell &&
      cell.xPosition === this.currentCell.xPosition &&
      cell.yPosition === this.currentCell.yPosition
    ) {
      this.currentCell = undefined;
      this.possibleMovements = [];
      return;
    }

    this.currentCell = cell;
    this.possibleMovements = this.board.getPossibleMovements(cell);
  }
}
