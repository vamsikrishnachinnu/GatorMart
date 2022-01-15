import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material Imports
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const materialImports = [
  MatCardModule,
  MatButtonModule
]
@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialImports
  ],
  exports: [
    ...materialImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }