import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemViewComponent} from './item-update.component';

describe('ItemComponent', () => {
  let component: ItemViewComponent;
  let fixture: ComponentFixture<ItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
