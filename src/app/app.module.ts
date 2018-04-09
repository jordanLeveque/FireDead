import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';

let firebaseConfig = {
  apiKey: "AIzaSyA7SJ_8xdJx7QRrtFCbqi_YNap9P_RBgZI",
  authDomain: "walkingbase-d820f.firebaseapp.com",
  databaseURL: "https://walkingbase-d820f.firebaseio.com",
  projectId: "walkingbase-d820f",
  storageBucket: "walkingbase-d820f.appspot.com",
  messagingSenderId: "608071401024"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
