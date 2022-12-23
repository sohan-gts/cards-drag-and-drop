import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss']
})
export class GamePlayComponent implements OnInit {

  @ViewChildren('myCardsOpned') myCardsOpned!: QueryList<ElementRef>;

  @ViewChild('myCardsContainer') myCardsContainer!: ElementRef;
  myCards:any = [
    {suit: 'c', face: 6},
    {suit: 'c', face: 8},
    {suit: 'c', face: 9}
    ,{face: 8, suit: 'd'},
    {face: 8, suit: 'c'},
    {face: 6, suit: 'h'}
  ];
  opponentCard: any = [
    {suit: 'c', face: 6},
    {suit: 'c', face: 14},
    {suit: 'c', face: 9}
    ,{face: 12, suit: 'd'},
    {face: 8, suit: 'c'},
    {face: 11, suit: 'h'}
  ];
  myCardsContainerWidth: any;
  totalMyOpenedCard: any;
  constructor() { }

  ngOnInit(): void {
  }

  readyPrimaryPlayer(){

  }









  setMyOwnCards() {
    this.myCardsContainerWidth =
      this.myCardsContainer.nativeElement.offsetWidth;
    this.totalMyOpenedCard = this.myCardsOpned.length;

    if (this.myCardsOpned.length) {
      var afterMiddleCard = 1;
      var beforeMiddleCard = 1;
      this.myCardsOpned.forEach((element, index) => {
        element.nativeElement.classList.remove("cards-fly-in");
        element.nativeElement.style.transition = `all ${index *400}ms cubic-bezier(0.23, 1, 0.32, 1)`;
        if (index === Math.round(this.totalMyOpenedCard / 2)) {
          element.nativeElement.style.left = `${50}%`;
          element.nativeElement.style.zIndex = Math.round(
            this.totalMyOpenedCard / 2
          );
          element.nativeElement.style.top = -1 + 'px';
        } else if (index <= Math.round(this.totalMyOpenedCard / 2)) {
          element.nativeElement.children[0].style.transform = `rotate(${-index}deg)`;
          element.nativeElement.style.left = `calc( ${50}% -  ${
            (element.nativeElement.offsetWidth / 6) * beforeMiddleCard
          }px)`;
          element.nativeElement.style.top = beforeMiddleCard + 'px';
          element.nativeElement.style.zIndex =
            Math.round(this.totalMyOpenedCard / 2) - beforeMiddleCard;
          beforeMiddleCard++;
        } else {
          element.nativeElement.style.left = `calc( ${50}% +  ${
            (element.nativeElement.offsetWidth / 6) * afterMiddleCard
          }px)`;
          element.nativeElement.style.top = afterMiddleCard + 'px';
          element.nativeElement.style.zIndex =
            Math.round(this.totalMyOpenedCard / 2) + afterMiddleCard;
          afterMiddleCard++;
          element.nativeElement.children[0].style.transform = `rotate(${index}deg)`;
        }

        setTimeout(()=>{
          element.nativeElement.style.transition = `all ${0}ms cubic-bezier(0, 0, 0, 0)`;
        },1000)

      });
      // console.log("this.opponentCard= =>",this.opponentCard);
      // console.log(this.oponentPlayersArr);

      this.opponentCard.forEach((element:any,index:number) => {
        element.nativeElement.classList.remove("cards-fly-in");
        element.nativeElement.style.transition = `all ${index *400}ms cubic-bezier(0.23, 1, 0.32, 1)`;

        setTimeout(()=>{
          element.nativeElement.style.transition = `all ${0}ms cubic-bezier(0, 0, 0, 0)`;
        },1000)
      });
    }

    // this.allottCardToMe.nativeElement.removeClass = 'allott-card-to-me';
  }

}
