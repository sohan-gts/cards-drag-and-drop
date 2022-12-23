import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlay2Component } from './game-play2.component';

describe('GamePlay2Component', () => {
  let component: GamePlay2Component;
  let fixture: ComponentFixture<GamePlay2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePlay2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamePlay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
