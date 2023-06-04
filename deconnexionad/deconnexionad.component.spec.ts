import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeconnexionadComponent } from './deconnexionad.component';

describe('DeconnexionadComponent', () => {
  let component: DeconnexionadComponent;
  let fixture: ComponentFixture<DeconnexionadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeconnexionadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeconnexionadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
