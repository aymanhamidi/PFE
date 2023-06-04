import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierUtilisateuradComponent } from './modifier-utilisateurad.component';

describe('ModifierUtilisateuradComponent', () => {
  let component: ModifierUtilisateuradComponent;
  let fixture: ComponentFixture<ModifierUtilisateuradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierUtilisateuradComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierUtilisateuradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
