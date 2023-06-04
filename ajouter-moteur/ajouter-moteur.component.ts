import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Moteur } from '../moteur';
import { AjoutermoteurService } from '../ajoutermoteur.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConnexionnutilisateurService } from '../connexionnutilisateur.service';
import { Userau } from '../userau';
import { Utilisateur } from '../utilisateur';


@Component({
  selector: 'app-ajouter-moteur',
  templateUrl: './ajouter-moteur.component.html',
  styleUrls: ['./ajouter-moteur.component.css']
})
export class AjouterMoteurComponent {
  isLoggedIn: boolean = false;
    utilisateurForm = new FormGroup({
      idUtilisateur: new FormControl('', [Validators.required, Validators.email]),
      idMotdePasse: new FormControl('', [Validators.required]),
    });
 
 
  currentUser: number = 0;

  moteur: Moteur = new Moteur();
    id: number = 0;
    vitesse: number = 0;
    consommation: number = 0;
    ville: string = '';
    inspectionVisuelle: string = '';
    date: Date = new Date();
    temperature: number = 0;
    utilisateur: number = 0;
  

  onSubmit() {
    this.moteur.utilisateur = this.currentUser
    this.service.ajoutermoteur(this.moteur).subscribe(
      sucess => {
        console.log(sucess);
        alert("Ajout réussie")

      },
      error => {
        console.log(error);
        alert("Désolé s'il vous plaît entrer les valeurs corrects")

      });
  }

  constructor(private service: AjoutermoteurService, private router: Router,private connexionnutilisateurservice: ConnexionnutilisateurService,
  private formBuilder: FormBuilder,private route: ActivatedRoute,) {
    const a = localStorage.getItem('currentUser')
    if(a == "false") {
      // alert('Erreur : Connectez vous pour naviguer a cette page');
      this.router.navigate(['/deconnexion']); 
    }
    this.currentUser = Number(a)
    console.log(this.currentUser)
    }
  ajouterMoteur() {
      this.moteur.id = this.id;
      this.moteur.temperature = this.temperature;
      this.moteur.vitesse = this.vitesse;
      this.moteur.consommation=this.consommation
      this.moteur.inspectionVisuelle = this.inspectionVisuelle;
      this.moteur.ville = this.ville;
      this.moteur.date = this.date;
      this.moteur.utilisateur = this.currentUser;
      
     
      }
      filterMoteurByUser(moteurList: Moteur[]): Moteur[] {
        return moteurList.filter(moteur => moteur.utilisateur === this.currentUser);
      }

      supprimerMoteur(id: number) {
        if (confirm('Voulez-vous vraiment supprimer cette Moteur?')) {
          this.service.supprimerMoteur(id).subscribe(
            data => {
              console.log(data);
              alert('Moteur supprimée avec succès!');
              this.ajouterMoteur();
            },
            error => {
              console.log(error);
            }
          );
        }
      }
    
      modifierMoteur(id: number) {
        this.router.navigate(['modifier-moteur', { id: id }]);
      }


  }

 





     