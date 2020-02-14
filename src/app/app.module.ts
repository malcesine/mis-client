import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EssentialsModule } from './essentials/essentials.module';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { VisualisationPrototypeModule } from './visualisation-prototype/visualisation-prototype.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EssentialsModule,
    MatMomentDateModule,
    VisualisationPrototypeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
