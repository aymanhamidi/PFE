import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { ActivatedRoute, Router } from '@angular/router';
import { AjoutUserService } from '../ajout-user.service';

@Component({
  selector: 'app-info-utilisateur',
  templateUrl: './info-utilisateur.component.html',
  styleUrls: ['./info-utilisateur.component.css']
})
export class InfoUtilisateurComponent implements OnInit{

  sexe: boolean = true;
  utilisateurListe : Utilisateur[] = [];
  id: number = 0;
  currentUser: number = 0;

  onSelected(value:string): void {
		this.sexe = value=="1" ? true : false;
	}

  constructor(
    private userService:AjoutUserService,
    private router: Router,
    private route: ActivatedRoute,
    
  ) {
    const a = localStorage.getItem('currentUser')
    if(a == "false") {
      // alert('Erreur : Connectez vous pour naviguer a cette page');
      this.router.navigate(['/deconnexion']); 
    }
    this.currentUser = Number(a)
    console.log(this.currentUser)
    }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    // this.currentUser = Number(localStorage.getItem('currentUser'));
    this.getAllUtilisateur(this.currentUser);
    
  }

  getAllUtilisateur(id: number) {
    this.userService.getAllUtilisateur(id).subscribe(data => {
      this.utilisateurListe = data;
      console.log(data)
    });
  }

  editUtilisateur(utilisateur: Utilisateur) {
    this.userService.modifierUtilisateur(utilisateur.id, utilisateur).subscribe(() => {
      console.log('Utilisateur modifié avec succès');
      this.router.navigate(['/modifier-utilisateur/'+this.currentUser]);
    }, (error) => {
      console.error('Erreur lors de la modification du Utilisateur', error);
    });
  }

  

}
