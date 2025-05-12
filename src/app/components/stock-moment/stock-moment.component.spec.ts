import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMomentComponent } from './stock-moment.component';

describe('StockMomentComponent', () => {
  let component: StockMomentComponent;
  let fixture: ComponentFixture<StockMomentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockMomentComponent]
    });
    fixture = TestBed.createComponent(StockMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
