import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCnvabComponent } from './modifier-cnvab.component';

describe('ModifierCnvabComponent', () => {
  let component: ModifierCnvabComponent;
  let fixture: ComponentFixture<ModifierCnvabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierCnvabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierCnvabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
