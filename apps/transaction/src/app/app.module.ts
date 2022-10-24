import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageHeaderModule } from 'page-header';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PageHeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
