import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { XyzUserListComponent } from './user-list/user-list.component';

import { XyzErrorHandlerService } from './shared/error-handler.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, routing],
  declarations: [AppComponent, XyzUserListComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: ErrorHandler, useClass: XyzErrorHandlerService }
  ]
})
export class AppModule {}
