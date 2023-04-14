import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-game-play2',
  templateUrl: './game-play2.component.html',
  styleUrls: ['./game-play2.component.scss']
})
export class GamePlay2Component implements OnInit {

  ngOnInit(): void {
      // throw new Error('Method not implemented.');
    }


    all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    even = [10];

    drop(event: CdkDragDrop<number[]>) {
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

    /** Predicate function that only allows even numbers to be dropped into a list. */
    evenPredicate(item: CdkDrag<number>) {
      return item.data % 2 === 0;
    }

    /** Predicate function that doesn't allow items to be dropped into a list. */
    noReturnPredicate() {
      return false;
    }


    formatLabel(value: number): string {
      if (value >= 1000) {
        return Math.round(value / 1000) + 'k';
      }

      return `${value}`;
    }


}
