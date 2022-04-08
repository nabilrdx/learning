import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BawaalComponent } from './bawaal.component';

describe('BawaalComponent', () => {
  let component: BawaalComponent;
  let fixture: ComponentFixture<BawaalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BawaalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BawaalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
