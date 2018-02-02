///<reference path="form.ts"/>
namespace SportNgin {

  export interface SurveyInterface {
    id: number,
    name: string,
    site_id: number,
    status: number,
    registrar_emails: string,
    rep_user_id: number,
    open_date: string,
    close_date: string,
    forms:Form[]
  }

  export class Survey implements SurveyInterface {
    id: number;
    name: string;
    site_id: number;
    status: number;
    registrar_emails: string;
    rep_user_id: number;
    open_date: string;
    close_date: string;
    forms: Form[];
  }
}
