import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; 
import { PinchZoomModule } from './pinch-zoom/pinch-zoom.module';

@NgModule({
  imports: [BrowserModule, FormsModule, PinchZoomModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
