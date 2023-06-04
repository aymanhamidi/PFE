import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMoteurComponent } from './modifier-moteur.component';

describe('ModifierMoteurComponent', () => {
  let component: ModifierMoteurComponent;
  let fixture: ComponentFixture<ModifierMoteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierMoteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierMoteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
