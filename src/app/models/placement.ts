namespace SportNgin {
  export interface PlacementInterface {
    id: number,
    position: number,
    element_locked: boolean,
    content_locked: boolean,
    custom_css_class: string
  }

  export class Placement implements PlacementInterface {
    id: number;
    position: number;
    element_locked: boolean;
    content_locked: boolean;
    custom_css_class: string;

  }
}
