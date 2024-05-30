import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N5kanjiComponent } from './n5kanji.component';

describe('N5kanjiComponent', () => {
  let component: N5kanjiComponent;
  let fixture: ComponentFixture<N5kanjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [N5kanjiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(N5kanjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
