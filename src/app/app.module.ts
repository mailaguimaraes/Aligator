import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*angular material¿**/
import {MatButtonModule} from '@angular/material/button';
import { Aligator1Component } from './aligator1/aligator1.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



/*angular material¿end**/

@NgModule({
  declarations: [
    AppComponent,
    Aligator1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatChipsModule,
    MatStepperModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
