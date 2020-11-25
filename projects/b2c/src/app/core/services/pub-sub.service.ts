import { Injectable, EventEmitter } from '@angular/core';

export interface ErrorI {
  type: string;
  data: object;
}

@Injectable({
  providedIn: 'root'
})
export class PubSubService {
  emitter: EventEmitter<ErrorI> = new EventEmitter();
  constructor() { }
  /**
   * this function is to pass error data to FromErrorAlertComponent
   * @type string default type is "fromError"
   * @data object data includes class, msg, timeOut
   * @memberof  PubSubService
   */
  publish(type, data): void {
    const payload: ErrorI = {
      type,
      data
    };
    this.emitter.emit(payload);
  }
}
