import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnexionAdministrateurComponent } from './connexion-administrateur.component';

describe('ConnexionAdministrateurComponent', () => {
  let component: ConnexionAdministrateurComponent;
  let fixture: ComponentFixture<ConnexionAdministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionAdministrateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
