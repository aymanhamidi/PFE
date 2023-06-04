import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AjoutUserService } from '../ajout-user.service';

@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.component.html',
  styleUrls: ['./modifier-utilisateur.component.css']
})
export class ModifierUtilisateurComponent implements OnInit  {

  sexe: number = 0;
  utilisateur : Utilisateur = new Utilisateur();
  id: number = 0;
  currentUser: number = 0;

  constructor(
    private userService: AjoutUserService,
    private route: ActivatedRoute,
    private router: Router,

  ) {
    const a = localStorage.getItem('currentUser')
    if(a == "false") {
      // alert('Erreur : Connectez vous pour naviguer a cette page');
      this.router.navigate(['/deconnexion']); 
    }
    this.currentUser = Number(a)
    console.log(this.currentUser)
    }

  onSelected(value:number): void {
		this.utilisateur.sexe = value==1 ? true : false;
	}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.userService.getAllUtilisateur(this.currentUser).subscribe((data) => {
        const utilisateur = data.find((utilisateur) => utilisateur.id === +id);
        if (utilisateur) {
          this.utilisateur = utilisateur;
          this.sexe = this.utilisateur.sexe ? 1 : 0;
        } else {
          console.error('Utilisateur avec id', id, 'introuvable.');
        }
      });
    }
  }

  onSubmit() {
    this.utilisateur.id = this.currentUser
    this.userService.modifierUtilisateur(this.utilisateur.id, this.utilisateur).subscribe(
      (data) => {
        console.log(data);
        alert('Utilisateur modifiée avec succès!');
        this.router.navigate(['/info-utilisateur/'+this.utilisateur.id]);
      },
      (error) => {
        console.log(error);
        alert('Désolé, une erreur s\'est produite lors de la modification de l\'utilisateur.');
      }
    );
  }

}
