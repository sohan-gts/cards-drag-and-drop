import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlay3Component } from './game-play3.component';

describe('GamePlay3Component', () => {
  let component: GamePlay3Component;
  let fixture: ComponentFixture<GamePlay3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePlay3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamePlay3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
