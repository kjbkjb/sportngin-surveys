///<reference path="column.ts"/>

namespace SportNgin {

  export interface ContainerInterface {
    id: number,
    columns: any[]
  }

  export class Container implements ContainerInterface {
    id: number;
    columns: Column[];

  }
}
