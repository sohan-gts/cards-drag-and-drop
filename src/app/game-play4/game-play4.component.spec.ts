import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlay4Component } from './game-play4.component';

describe('GamePlay4Component', () => {
  let component: GamePlay4Component;
  let fixture: ComponentFixture<GamePlay4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePlay4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamePlay4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
