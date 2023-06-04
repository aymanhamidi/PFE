import { Component } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { AjoutUserService } from '../ajout-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-utilisateur',
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrls: ['./ajouter-utilisateur.component.css']
})
export class AjouterUtilisateurComponent {
  currentUser: number = 0;
  utilisateur: Utilisateur = new Utilisateur();
  idUtilisateur: string = '';
  idMotdePasse: string = '';
  nomComplet: string = '';
  numTelephone: number = 0;
  sexe: boolean = true;
  grade: string = '';

  onSelected(value:string): void {
		this.sexe = value=="1" ? true : false;
	}

  onSubmit() {
    this.utilisateur.sexe = this.sexe
    console.log(this.utilisateur)
    console.log("onsubmit up")
    this.service.ajoutUser(this.utilisateur).subscribe(
      sucess => {
        console.log(sucess);
        alert("Ajout réussie")

      },
      error => {
        console.log(error);
        alert("Désolé s'il vous plaît entrer des valeur correct")

      });
  }

  constructor(private service: AjoutUserService, private router: Router) { 
    const a = localStorage.getItem('currentUser')
  if(a == "false") {
    // alert('Erreur : Connectez vous pour naviguer a cette page');
    this.router.navigate(['/deconnexionad']); 
  }
  this.currentUser = Number(a)
  console.log(this.currentUser)
  }
    ajouterUtilisateur() {
      this.utilisateur.idUtilisateur = this.idUtilisateur;
      this.utilisateur.idMotdePasse = this.idMotdePasse;
      this.utilisateur.nomComplet = this.nomComplet;
      this.utilisateur.numTelephone = this.numTelephone;
      this.utilisateur.sexe = this.sexe;
      this.utilisateur.grade = this.grade;
      }
  }
