///<reference path="choice.ts"/>
namespace SportNgin {

  export interface QuestionInterface {
    report_name: string,
    inline_help: string,
    long_help: string,
    is_hidden: boolean,
    auto_fill: boolean,
    mask: string,
    editable_by_user: boolean,
    label: string,
    question_type: string,
    choices: Choice[]
  }

  export class Question implements QuestionInterface{
    report_name: string;
    inline_help: string;
    long_help: string;
    is_hidden: boolean;
    auto_fill: boolean;
    mask: string;
    editable_by_user: boolean;
    label: string;
    question_type: string;
    choices: Choice[];

  }
}
