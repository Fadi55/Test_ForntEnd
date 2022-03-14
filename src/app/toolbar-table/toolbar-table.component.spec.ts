import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarTableComponent } from './toolbar-table.component';

describe('ToolbarTableComponent', () => {
  let component: ToolbarTableComponent;
  let fixture: ComponentFixture<ToolbarTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
