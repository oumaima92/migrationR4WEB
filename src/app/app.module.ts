import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TextComponent } from './text/text.component';
import { AT01Component } from './at01/at01.component';
import { AT02Component } from './at02/at02.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TextComponent,
    AT01Component,
    AT02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
