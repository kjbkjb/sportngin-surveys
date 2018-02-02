///<reference path="placement.ts"/>
///<reference path="question-element.ts"/>

namespace SportNgin {

  export interface ElementInterface {
    type: string,
    placement: PlacementInterface,
    question_element?: any
  }

  export class Element implements ElementInterface {
    type: string;
    placement: Placement;
    question_element?: QuestionElement;

  }
}
