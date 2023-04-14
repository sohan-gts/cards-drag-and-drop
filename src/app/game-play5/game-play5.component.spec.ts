import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlay5Component } from './game-play5.component';

describe('GamePlay5Component', () => {
  let component: GamePlay5Component;
  let fixture: ComponentFixture<GamePlay5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePlay5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamePlay5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
