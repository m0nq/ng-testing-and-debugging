import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class XyzErrorHandlerService extends ErrorHandler {

  constructor() {
    super();
  }

  handleError(error: any): void {
    const date = new Date();
    console.error('An error was raised ->', {
      timestamp: date.toISOString(),
      message: error.message,
      zone: error.zone,
      task: error.task
    });
  }
}
