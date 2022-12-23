import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-game-play3',
  templateUrl: './game-play3.component.html',
  styleUrls: ['./game-play3.component.scss']
})








export class GamePlay3Component implements OnInit , AfterViewInit{

  public myCards :any= [
    {face: 6, suit: 'c'},
    {face: 7, suit: 'h'},
    {face: 8, suit: 'h'},
    {face: 9, suit: 's'},
    {face: 10, suit: 'c'},
    {face: 7, suit: 'd'}
  ];


  tableCards :any = [
    {
      attack:[
        {face: 6, suit: 'c'}
      ]
    },
    {
      attack : [
        {face: 6, suit: 'c'}
      ]
    },
    {
      attack : [
        {face: 6, suit: 'c'}
      ]
    },
    {
      attack : [
        {face: 6, suit: 'c'}
      ]
    }
  ]

  dropListConnectedTo : any = [];


@ViewChildren('tableContainer') tableContainer!: QueryList<ElementRef> ;
  constructor() { }
  ngAfterViewInit(): void {
    // console.log("this.tableContainer ==>",this.tableContainer);

  }

  ngOnInit(): void {
    console.log(this.tableCards);
    this.tableCards.forEach((element : any , index : any) => {
      this.dropListConnectedTo.push('slot'+index)
    });
    console.log(this.dropListConnectedTo);

  }

  drop(event: CdkDragDrop<any>) {
  // this will stop item from drop
    // if(this.tableCards.length>=2){
    //   return
    //  }
    console.log("where we are droping it.",event);
    event.item.moved.subscribe((data)=>{console.log("data ==>",data);
    })
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

    // console.log("this.tableCards after drop ",this.tableCards);

  }



  /** Predicate function that only allows even numbers to be dropped into a list. */
  evenPredicate(item: CdkDrag<any>, list: CdkDropList<any>):boolean {
    // console.log("this.tableContainer ==>",this.tableContainer);

    // console.log("item where we want to drop it. ==>",item.dropContainer.data);

    return true;

    if(this.tableCards.length < 2)
      return true;
      else
      return false
  }



  isDropAllowed(drag: CdkDrag, drop: CdkDropList){
    console.log("this.tableCards in is drop allowed===>",this.tableCards);
    return true

  }


  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    console.log("this.tableCards in the evenPredicate ===>",this.tableCards);
    return false;
  }
}
