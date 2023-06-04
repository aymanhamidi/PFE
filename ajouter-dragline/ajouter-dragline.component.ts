import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dragline } from '../dragline';
import { AjouterdraglineService } from '../ajouterdragline.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConnexionnutilisateurService } from '../connexionnutilisateur.service';
import { Userau } from '../userau';
import { Utilisateur } from '../utilisateur';



@Component({
  selector: 'app-ajouter-dragline',
  templateUrl: './ajouter-dragline.component.html',
  styleUrls: ['./ajouter-dragline.component.css']
})
export class AjouterDraglineComponent {
  isLoggedIn: boolean = false;
  utilisateurForm = new FormGroup({
    idUtilisateur: new FormControl('', [Validators.required, Validators.email]),
    idMotdePasse: new FormControl('', [Validators.required]),
  });
  currentUser: number = 0
  
  dragline: Dragline = new Dragline();
  id: number = 0;
  poids: number = 0;
  rotation: number = 0;
  ville: string = '';
  inspectionVisuelle: string = '';
  date: Date = new Date();
  temperature: number = 0;
  utilisateur: number = 0;


  onSubmit() {
    this.dragline.utilisateur = this.currentUser
    this.service.ajouterdragline(this.dragline).subscribe(
      sucess => {
        console.log(sucess);
        alert("Ajout réussie")

      },
      error => {
        console.log(error);
        alert("Désolé s'il vous plaît entrer les valeurs corrects")

      });
  }
 

  constructor(private service: AjouterdraglineService, private router: Router,private connexionnutilisateurservice: ConnexionnutilisateurService,
    private formBuilder: FormBuilder,private route: ActivatedRoute,) {
      const a = localStorage.getItem('currentUser')
      if(a == "false") {
        // alert('Erreur : Connectez vous pour naviguer a cette page');
        this.router.navigate(['/deconnexion']); 
      }
      this.currentUser = Number(a)
      console.log(this.currentUser)
      }
  ajouterDragline() {
      this.dragline.id = this.id;
      this.dragline.poids = this.poids;
      this.dragline.rotation = this.rotation;
      this.dragline.ville = this.ville;
      this.dragline.inspectionVisuelle = this.inspectionVisuelle;
      this.dragline.temperature = this.temperature;
      this.dragline.date = this.date;
      this.dragline.utilisateur = this.currentUser;
      }
      filterDraglineByUser(draglineList: Dragline[]): Dragline[] {
        return draglineList.filter(dragline => dragline.utilisateur === this.currentUser);
      }
      supprimerDragline(id: number) {
        if (confirm('Voulez-vous vraiment supprimer cette Dragline?')) {
          this.service.supprimerDragline(id).subscribe(
            data => {
              console.log(data);
              alert('Dragline supprimée avec succès!');
              this.ajouterDragline();
            },
            error => {
              console.log(error);
            }
          );
        }
      }
    
      modifierDragline(id: number) {
        this.router.navigate(['modifier-dragline', { id: id }]);
      }

      
  }


