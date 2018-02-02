///<reference path="placement.ts"/>
namespace SportNgin {
  export interface HrInterface {
    id: number,
    placement: PlacementInterface
  }

  export class Hr implements HrInterface {
    id: number;
    placement: Placement;
  }
}
