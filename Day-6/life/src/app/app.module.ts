import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TigerComponent } from './tiger/tiger.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';

@NgModule({
  declarations: [
    AppComponent,
    TigerComponent,
    SocialmediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
