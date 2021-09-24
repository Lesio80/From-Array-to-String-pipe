import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyCustomPipe } from './m-custom.pipe';
import { CheckEmptyPipe } from './check-empty.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, MyCustomPipe, CheckEmptyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
