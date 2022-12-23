import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePlayComponent } from './game-play/game-play.component';
import { GamePlay2Component } from './game-play2/game-play2.component';
import { GamePlay3Component } from './game-play3/game-play3.component';

const routes: Routes = [
  {path : 'game-play' , component : GamePlayComponent},
  {path : 'game-play2' , component : GamePlay2Component},
  {path:'',component:GamePlay3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
