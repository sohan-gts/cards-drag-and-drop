import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-game-play2',
  templateUrl: './game-play2.component.html',
  styleUrls: ['./game-play2.component.scss']
})
export class GamePlay2Component implements OnInit {
  items = ['Carrots', 'Tomatoes', 'Onions', 'Apples', 'Avocados'];

  basket = ['Oranges', 'Bananas', 'Cucumbers'];
  myName = 'sohan paliyal';
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
    constructor(){

    }
  ngOnInit(): void {

  }

  noReturnPredicate(){

    console.log("this.myName",this.myName);
    return true;
  }




}
