namespace SportNgin {
  export interface ChoiceInterface {
    id: number,
    is_enabled: boolean,
    is_selected: boolean,
    item_variation_id?: number,
    position: number,
    quantity: number,
    value?: any,
    numeric_value: number,
    name: string
  }

  export class Choice implements ChoiceInterface {
    id: number;
    is_enabled: boolean;
    is_selected: boolean;
    item_variation_id?: number;
    position: number;
    quantity: number;
    value?: any;
    numeric_value: number;
    name: string;

  }
}
