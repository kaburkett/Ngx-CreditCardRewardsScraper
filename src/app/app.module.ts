import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RewardsService } from './rewards.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [RewardsService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
