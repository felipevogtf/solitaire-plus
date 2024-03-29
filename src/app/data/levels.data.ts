import { CellStatus } from '@models/cell-status.model';

export const DEFAULT_LEVEL: CellStatus[][] = [
  // First level
  [
    CellStatus.DISABLED,
    CellStatus.DISABLED,
    CellStatus.DISABLED,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.DISABLED,
    CellStatus.DISABLED,
    CellStatus.DISABLED,
  ],
  [
    CellStatus.DISABLED,
    CellStatus.DISABLED,
    CellStatus.DISABLED,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.DISABLED,
    CellStatus.DISABLED,
    CellStatus.DISABLED,
  ],
  [
    CellStatus.DISABLED,
    CellStatus.DISABLED,
    CellStatus.DISABLED,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.DISABLED,
    CellStatus.DISABLED,
    CellStatus.DISABLED,
  ],
  //

  // Second level
  [
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
  ],
  [
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.EMPTY,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
  ],
  [
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
  ],
  //

  // Third level
  [
    CellStatus.DISABLED,
    CellStatus.DISABLED,
    CellStatus.DISABLED,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.DISABLED,
    CellStatus.DISABLED,
    CellStatus.DISABLED,
  ],
  [
    CellStatus.DISABLED,
    CellStatus.DISABLED,
    CellStatus.DISABLED,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.DISABLED,
    CellStatus.DISABLED,
    CellStatus.DISABLED,
  ],
  [
    CellStatus.DISABLED,
    CellStatus.DISABLED,
    CellStatus.DISABLED,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.TAKEN,
    CellStatus.DISABLED,
    CellStatus.DISABLED,
    CellStatus.DISABLED,
  ],


  // TODO: Implementar mas niveles
];
