import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';


@Component({
  selector: 'app-game-play3',
  templateUrl: './game-play3.component.html',
  styleUrls: ['./game-play3.component.scss']
})








export class GamePlay3Component implements OnInit{



  public myCards :any= [
    {face: 6, suit: 'c'},
    {face: 7, suit: 'h'},
    {face: 8, suit: 'h'},
    {face: 9, suit: 's'},
    {face: 10, suit: 'c'},
    {face: 7, suit: 'd'}
  ];

  newFace
   newSuit
    newColor

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
  // dragPosition = {x: 0, y: 0};

@ViewChildren('tableContainer') tableContainer!: QueryList<ElementRef> ;
@ViewChild('myCardsContainer') myCardsContainer: ElementRef ;
  imgBase64: any;
  constructor(public captureService : NgxCaptureService) { }


  ngOnInit(): void {
    // console.log(this.tableCards);
    this.tableCards.forEach((element : any , index : any) => {
      this.dropListConnectedTo.push('slot'+index)
    });
    // console.log(this.dropListConnectedTo);
  }




  capture() {
    this.captureService.getImage(document.body, true)
.pipe(
  tap(img => {
    this.imgBase64 = img;
    console.log("this.imgBase64 ===>",this.imgBase64);

        this.appendIt()
  })
).subscribe();
  }




  appendIt(){

    const element = document.createElement(`div`);
    element.classList.add('ss-image');


    const img = document.createElement(`img`)
    img.src = this.imgBase64;
    element.appendChild(img)

    document.body.appendChild(element);



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

    return true;
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    console.log("this.tableCards in the evenPredicate ===>",this.tableCards);
    return false;
  }




  makeCardPretty(face, suit) {


    if (face <= 10) this.newFace = face;
    else if (face === 11) this.newFace = 'J';
    else if (face === 12) this.newFace = 'Q';
    else if (face === 13) this.newFace = 'K';
    else if (face === 14) this.newFace = 'A';

    if (suit === 'S') {
      this.newSuit = '♠';
      this.newColor = 'Black';
    } else if (suit === 'C') {
      this.newSuit = '♣';
      this.newColor = 'Black';
    } else if (suit === 'D') {
      this.newSuit = '♦';
      this.newColor = 'Red';
    } else if (suit === 'H') {
      this.newSuit = '♥';
      this.newColor = 'Red';
    }

    return `<div>
        <h3 className="face" [ngStyle]="{color: this.newColor}">
          {{this.newFace}}
        </h3>
        <h3 className="suit" [ngStyle]="{color: this.newColor}">
          {{this.newSuit}}
        </h3>
      </div>`;
  }



  iTake(){
console.log("this.myCardsContainer.nativeElement ==>",this.myCardsContainer.nativeElement.getBoundingClientRect().top);

//     console.log(this.tableContainer);

    this.tableContainer.forEach((element,index)=>{
        element.nativeElement.style.position = 'absolute';
        console.log(element.nativeElement.getBoundingClientRect().top);
        let i = 1;
    const intervl =   setInterval(()=>{
        if(this.myCardsContainer.nativeElement.getBoundingClientRect().top >= element.nativeElement.getBoundingClientRect().top){
          i++
          console.log('still these cards top is lesser',element.nativeElement.getBoundingClientRect().top);
          element.nativeElement.style.top = element.nativeElement.getBoundingClientRect().top +i+'px';

        }else{
          console.log('both tops are equal');

          this.tableCards.forEach((element)=>{
            if(index === 0 ){
              element.attack.forEach((attack , index2) => {
                console.log(attack);

                 this.myCards.push(attack)

               });
            }

          })
          clearInterval(intervl)
        }
      },100)
    })
      // transferArrayItem(this.tableCards[0].attack, this.myCards , 0, 0);
  }












  
}
