import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessusListComponent } from './processus-list.component';

describe('ProcessusListComponent', () => {
  let component: ProcessusListComponent;
  let fixture: ComponentFixture<ProcessusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessusListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
