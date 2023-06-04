import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDraglineComponent } from './modifier-dragline.component';

describe('ModifierDraglineComponent', () => {
  let component: ModifierDraglineComponent;
  let fixture: ComponentFixture<ModifierDraglineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierDraglineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierDraglineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
