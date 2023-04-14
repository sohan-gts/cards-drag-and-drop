import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-play5',
  templateUrl: './game-play5.component.html',
  styleUrls: ['./game-play5.component.scss']
})
export class GamePlay5Component implements OnInit {


  cards: any[] = [
    { value: 'Ace', suit: 'Spades' },
    { value: '2', suit: 'Spades' },
    { value: '3', suit: 'Spades' },
    { value: '4', suit: 'Spades' },
    { value: '5', suit: 'Spades' },
    { value: '6', suit: 'Spades' },
    { value: '7', suit: 'Spades' },
    { value: '8', suit: 'Spades' },
    { value: '9', suit: 'Spades' },
    { value: '10', suit: 'Spades' },
    { value: 'Jack', suit: 'Spades' },
    { value: 'Queen', suit: 'Spades' },
    { value: 'King', suit: 'Spades' }
  ];

  columns: any[] = [
    { name: 'Column 1', cards: [] },
    { name: 'Column 2', cards: [] },
    { name: 'Column 3', cards: [] },
    { name: 'Column 4', cards: [] }
  ];

  constructor() { }

  ngOnInit(): void {
    // Shuffle the cards
    this.shuffleCards();

    // Deal the cards to the columns
    let columnIndex = 0;
    this.cards.forEach(card => {
      this.columns[columnIndex].cards.push(card);
      columnIndex = (columnIndex + 1) % 4;
    });
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Move the card from the previous container to the new container
      const card = event.previousContainer.data[event.previousIndex];
      event.previousContainer.data.splice(event.previousIndex, 1);
      event.container.data.splice(event.currentIndex, 0, card);
    }
  }s
}
