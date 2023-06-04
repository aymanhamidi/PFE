import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDraglineComponent } from './ajouter-dragline.component';

describe('AjouterDraglineComponent', () => {
  let component: AjouterDraglineComponent;
  let fixture: ComponentFixture<AjouterDraglineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterDraglineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterDraglineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
