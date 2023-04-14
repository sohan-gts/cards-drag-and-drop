import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePlayComponent } from './game-play/game-play.component';
import { GamePlay2Component } from './game-play2/game-play2.component';
import { GamePlay3Component } from './game-play3/game-play3.component';
import { GamePlay4Component } from './game-play4/game-play4.component';
import { GamePlay5Component } from './game-play5/game-play5.component';

const routes: Routes = [
  {path : 'game-play' , component : GamePlayComponent},
  {path : 'game-play2' , component : GamePlay2Component},
  {path:'play',component:GamePlay4Component},
  {path:'play2',component:GamePlay5Component},
  {path:'',component:GamePlay3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
