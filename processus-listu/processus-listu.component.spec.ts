import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessusListuComponent } from './processus-listu.component';

describe('ProcessusListuComponent', () => {
  let component: ProcessusListuComponent;
  let fixture: ComponentFixture<ProcessusListuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessusListuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessusListuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
