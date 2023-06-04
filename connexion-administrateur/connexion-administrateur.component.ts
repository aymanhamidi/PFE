import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Administrateur } from '../administrateur';
import { ConnexionnadministrateurService } from '../connexionnadministrateur.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';


interface AdminWithRole extends Administrateur {
  role: string,
}

@Component({
  selector: 'app-connexion-administrateur',
  templateUrl: './connexion-administrateur.component.html',
  styleUrls: ['./connexion-administrateur.component.css']
})
export class ConnexionAdministrateurComponent implements OnInit {
 
  isLoggedIn: boolean = false;
  administrateurForm = new FormGroup({
    idAdministrateur: new FormControl([Validators.required, Validators.email]),
    idMotdePasse: new FormControl([Validators.required]),
  });
 
  administrateur: AdminWithRole = {
    id:0,
    idAdministrateur: '',
    idMotdePasse: '',
    role: 'administrateur'
  };

  constructor(
      private formBuilder: FormBuilder,
      private connexionAdministrateurService: ConnexionnadministrateurService,
      private router: Router
    ) {}

  ngOnInit() {
  }
  
  connexionAdministrateur() { 
    
    console.log(this.administrateur)
    if (this.administrateurForm.valid) {

      this.connexionAdministrateurService.connexionnAdministrateur(this.administrateur)
        .subscribe(
          (data: any) => {
            this.administrateur.id = data.id;
            localStorage.setItem('currentUser', "admin1234@!");
            this.router.navigate(['/dashboard']); 
            console.log(data);
          },
          error => {
            this.isLoggedIn = false;
            console.log(error);
            alert("Désolé s'il vous plaît entrer un email et un mot de passe corrects")

          });
    } 
  }
}