import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMoteurComponent } from './ajouter-moteur.component';

describe('AjouterMoteurComponent', () => {
  let component: AjouterMoteurComponent;
  let fixture: ComponentFixture<AjouterMoteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterMoteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterMoteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
