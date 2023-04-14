import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { GamePlayComponent } from './game-play/game-play.component';
import { GamePlay2Component } from './game-play2/game-play2.component';
import { GamePlay3Component } from './game-play3/game-play3.component';
import { GamePlay4Component } from './game-play4/game-play4.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NgxCaptureModule } from 'ngx-capture';
import { FloatBtnComponent } from './float-btn/float-btn.component';
import { CanvasDrawComponent } from './canvas-draw/canvas-draw.component';
import {MatSliderModule} from '@angular/material/slider';
import { GamePlay5Component } from './game-play5/game-play5.component';
@NgModule({
  declarations: [
    AppComponent,
    GamePlayComponent,
    GamePlay2Component,
    GamePlay3Component,
    GamePlay4Component,
    FloatBtnComponent,
    CanvasDrawComponent,
    GamePlay5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    provideFirebaseApp(() => initializeApp(environment.config)),
    provideFirestore(() => getFirestore()),
    MatButtonModule,
    NgxCaptureModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
