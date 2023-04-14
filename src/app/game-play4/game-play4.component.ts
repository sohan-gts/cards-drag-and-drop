import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-game-play4',
  templateUrl: './game-play4.component.html',
  styleUrls: ['./game-play4.component.scss']
})
export class GamePlay4Component implements OnInit , AfterViewInit {


  @ViewChildren('myCardsOpned') myCardsOpned: QueryList<ElementRef>;

  myCards = [
    {suit: 'd',  face: 7 },
    {face: 7, suit: 'c' },
    {suit: 'c', face: 7 },
    { face: 7, suit: 's' },
    {face: 7, suit: 's'},
    {face: 7, suit: 's'}
  ];


  dropListConnectedTo = [ 'slot0' , 'slot1' , 'slot2'];


  cardsOnTable = [
    {
      attack : [{suit: '0',  face: 0 }]
    },
    {
      attack : [{suit: '0',  face: 0 }]
    },
    {
      attack : [{suit: '0',  face: 0 }]
    }
  ];


  drop(event: CdkDragDrop<any>) {

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


  constructor() {

    // console.log("hello there in the play ==>");

  }
  ngAfterViewInit(): void {


    console.log("this.myCardsOpned ==>",this.myCardsOpned);
    this.setMyOwnCards();

    // this.myCardsOpned.changes.pipe(distinctUntilChanged((prev, curr) => prev._results.length !== curr._results.length)).subscribe((changes: any) => {
    //   this.setMyOwnCards();
    // });


  }

  ngOnInit(): void {

  }



  setMyOwnCards(): void {

    if (this.myCardsOpned?.length) {
      const availRotationDeg = 35;
      const minRotate  = 1;
      const maxRotate = 10;

      const middleCard = Math.round(this.myCardsOpned.length / 2)
      let degreePerCard = availRotationDeg/middleCard;
      if (degreePerCard > maxRotate) {
        degreePerCard = maxRotate;
      }

      if (degreePerCard < minRotate) {
        degreePerCard = minRotate;
      }

      this.myCardsOpned.forEach((element, index) => {
    //  if (element.nativeElement.classList.contains('cards-fly-in')) {
    //     // if(this.primaryPlayer.hand[index].hasOwnProperty('newCardsFromDeck')){
    //     //   delete this.primaryPlayer.hand[index].newCardsFromDeck;
    //     // }
    //       setTimeout(() => {
    //         element.nativeElement.style.transition = `all ${1200}ms cubic-bezier(0.23, 1, 0.32, 1)`;
    //         element.nativeElement.classList.remove('cards-fly-in');
    //         setTimeout(() => {
    //           element.nativeElement.style.transition = `all ${0}ms cubic-bezier(0, 0, 0, 0)`;
    //         }, 30);

    //       }, 100);

    //   }

    //   if (element.nativeElement.classList.contains('getCardsFromTable')) {
    //     setTimeout(() => {
    //       element.nativeElement.style.transition = `all ${1200}ms cubic-bezier(0.23, 1, 0.32, 1)`;
    //       element.nativeElement.classList.remove('getCardsFromTable');

    //     }, 10 * index);
    //   }

        console.log(element);

        if (index === middleCard) {
          element.nativeElement.children[0].style.transform = `rotate(${(0)}deg)`;
        }
        else if (index < middleCard) {
          element.nativeElement.children[0].style.transform = `rotate(${(degreePerCard * (index - middleCard) )}deg)`;
        }
        else if (index > middleCard) {
          element.nativeElement.children[0].style.transform = `rotate(${(degreePerCard * (index- middleCard))}deg)`;
        }

      });
    }
  }

}
