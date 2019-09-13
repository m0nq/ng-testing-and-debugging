import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { XyzUserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { XyzErrorHandlerService } from './shared/error-handler.service';

@NgModule({
  imports: [BrowserModule, FormsModule, routing, HttpClientModule],
  declarations: [AppComponent, XyzUserListComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: ErrorHandler,
      useClass: XyzErrorHandlerService
    }
  ]
})
export class AppModule {
}
