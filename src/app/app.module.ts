import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from "angularfire2";


export const firebaseConfig = {
  apiKey: 'AIzaSyAfoFYKyAVyqXwJBPmvvpPTImwUgMk6tZk',
  authDomain: 'verdecardplantao.firebaseapp.com',
  databaseURL: 'https://verdecardplantao.firebaseio.com',
  storageBucket: 'verdecardplantao.appspot.com',
  messagingSenderId: '928074002617'
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
