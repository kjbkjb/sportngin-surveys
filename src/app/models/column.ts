namespace SportNgin {

  export interface ColumnInterface {
    id: number,
    elements: any[]
  }

  export class Column implements ColumnInterface {
    id: number;
    elements: any[];

  }
}
