namespace SportNgin {

  export interface ApiEnvelopeInterface {
    metadata: any,
    errors: any,
    result: any
  }

  export class ApiEnvelope implements ApiEnvelopeInterface {
    metadata: void
    errors: void
    result: {}
  }
}
