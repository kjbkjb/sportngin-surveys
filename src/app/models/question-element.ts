namespace SportNgin {

  export interface QuestionElementInterface {
    id: number,
    form_id: number,
    question_id: number,
    position: number,
    is_required: boolean,
    is_enabled: boolean,
    question: any
  }

  export class QuestionElement implements QuestionElementInterface {
    id: number;
    form_id: number;
    question_id: number;
    position: number;
    is_required: boolean;
    is_enabled: boolean;
    question: any;

  }
}
