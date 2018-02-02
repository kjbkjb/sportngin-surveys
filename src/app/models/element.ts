
namespace SportNgin {

  export interface ElementInterface {
    type: string,
    placement: any,
    question_element?: any
  }

  export class Element implements ElementInterface {
    type: string;
    placement: any;
    question_element?: any;

  }
}
