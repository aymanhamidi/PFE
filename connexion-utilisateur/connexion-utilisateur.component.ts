// import { Component, OnInit } from '@angular/core';
// import { Utilisateur } from '../utilisateur';
// import { ConnexionnutilisateurService } from '../connexionnutilisateur.service';
// import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Cnvab } from '../cnvab';

// interface UserWithRole extends Utilisateur {
//   role: string;
//   nomComplet: string;
//   numTelephone: number;
//   sexe: boolean;
//   grade: string;
// }

// @Component({
//   selector: 'app-connexion-utilisateur',
//   templateUrl: './connexion-utilisateur.component.html',
//   styleUrls: ['./connexion-utilisateur.component.css']
// })
// export class ConnexionUtilisateurComponent implements OnInit{
//   isLoggedIn: boolean = false;
//   utilisateurForm = new FormGroup({
//     idUtilisateur: new FormControl([Validators.required, Validators.email]),
//     idMotdePasse: new FormControl([Validators.required]),
//     role: new FormControl([Validators.required]),
//     nomComplet: new FormControl([Validators.required]),
//     numTelephone: new FormControl([Validators.required]),
//     sexe: new FormControl([Validators.required]),
//     grade: new FormControl([Validators.required]),
//   });
//   utilisateur: UserWithRole = {
//     id: 0,
//     idUtilisateur:'' ,
//     idMotdePasse:'',
//     role: 'utilisateur' ,
//     nomComplet: '',
//     numTelephone: 0,
//     sexe: true,
//     grade:'',
//   };
  
//   constructor(
//     private connexionnutilisateurservice: ConnexionnutilisateurService,
//     private formBuilder: FormBuilder,
//     private router: Router,
//     ){}
    
  
//   ngOnInit(): void { }
  
//   connexionUtilisateur() {
//     console.log(this.utilisateur);
//     if (this.utilisateurForm.valid) {
//       this.connexionnutilisateurservice.connexionnUtilisateur(this.utilisateur)
//         .subscribe(
//           data => {
//             this.isLoggedIn = true;
//             this.router.navigate(['/processus-list/'+this.utilisateur.id]); 
//             console.log(data);
//           },
//           error => {
//             this.isLoggedIn = false;
//             console.log(error);
//             alert("Désolé s'il vous plaît entrer un email et un mot de passe corrects")
//           }
//         );
//     }
//   }
  
//   }

import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { ConnexionnutilisateurService } from '../connexionnutilisateur.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cnvab } from '../cnvab';
import { Userau } from '../userau';

interface UserWithRole extends Utilisateur {
  role: string;
  nomComplet: string;
  numTelephone: number;
  sexe: boolean;
  grade: string;
}

@Component({
  selector: 'app-connexion-utilisateur',
  templateUrl: './connexion-utilisateur.component.html',
  styleUrls: ['./connexion-utilisateur.component.css']
})
export class ConnexionUtilisateurComponent implements OnInit{
  isLoggedIn: boolean = false;
  utilisateurForm = new FormGroup({
    idUtilisateur: new FormControl('', [Validators.required, Validators.email]),
    idMotdePasse: new FormControl('', [Validators.required]),
  });
  userau: Userau = {
    idUtilisateur:'' ,
    idMotdePasse:'',
  };
  
  utilisateur: Utilisateur = {
    id: 0,
    idUtilisateur:'' ,
    idMotdePasse:'',
    role: 'utilisateur' ,
    nomComplet: '',
    numTelephone: 0,
    sexe: true,
    grade:'',
  };
  
  constructor(
    private connexionnutilisateurservice: ConnexionnutilisateurService,
    private formBuilder: FormBuilder,
    private router: Router,
  ){}
  
  ngOnInit(): void {
    
  }
  
  connexionUtilisateur() {
    if (this.utilisateurForm.valid) {
      this.connexionnutilisateurservice.connexionnUserau(this.userau)
        .subscribe(
          (data: any) => {
            this.utilisateur.id = data.id; // mettre à jour l'ID de l'utilisateur
            localStorage.setItem('currentUser', data.id);
            this.router.navigate(['/processus-list/'+this.utilisateur.id]); 
            console.log(data);
          },
          error => {
            this.isLoggedIn = false;
            console.log(error);
            alert("Désolé s'il vous plaît entrer un email et un mot de passe corrects")
          }
        );
    }
  }
}
