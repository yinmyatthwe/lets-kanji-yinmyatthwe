import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N5testComponent } from './n5test.component';

describe('N5testComponent', () => {
  let component: N5testComponent;
  let fixture: ComponentFixture<N5testComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [N5testComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(N5testComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
