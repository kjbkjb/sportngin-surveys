///<reference path="container.ts"/>

namespace SportNgin {

  export interface FormInterface {
    id: number,
    name: string,
    repeatable: boolean,
    form_type: string,
    containers: ContainerInterface[]
  }

  export class Form implements FormInterface {
    id: number;
    name: string;
    repeatable: boolean;
    form_type: string;
    containers: Container[];

  }
}
