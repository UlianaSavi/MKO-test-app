import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBodyItemComponent } from './table-body-item.component';

describe('TableBodyItemComponent', () => {
  let component: TableBodyItemComponent;
  let fixture: ComponentFixture<TableBodyItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableBodyItemComponent]
    });
    fixture = TestBed.createComponent(TableBodyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
