import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCnvabComponent } from './ajouter-cnvab.component';

describe('AjouterCnvabComponent', () => {
  let component: AjouterCnvabComponent;
  let fixture: ComponentFixture<AjouterCnvabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterCnvabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterCnvabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
