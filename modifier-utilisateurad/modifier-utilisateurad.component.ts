import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AjoutUserService } from '../ajout-user.service';

@Component({
  selector: 'app-modifier-utilisateurad',
  templateUrl: './modifier-utilisateurad.component.html',
  styleUrls: ['./modifier-utilisateurad.component.css']
})
export class ModifierUtilisateuradComponent implements OnInit{
  sexe: number = 0;
  utilisateur : Utilisateur = new Utilisateur();
  id: number = 0;

  constructor(
    private userService: AjoutUserService,
    private route: ActivatedRoute,
    private router: Router,

  ) {
    const a = localStorage.getItem('currentUser')
    if(a != "admin1234@!") {
      // alert('Erreur : Connectez vous pour naviguer a cette page');
      localStorage.setItem("currentUser", "false")
      this.router.navigate(['/deconnexionad']); 
    }
    }

  onSelected(value:number): void {
		this.utilisateur.sexe = value==1 ? true : false;
	}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.userService.getAllUtilisateur(this.id).subscribe((data) => {
        const utilisateur = data.find((utilisateur) => utilisateur.id === +this.id);
        if (utilisateur) {
          this.utilisateur = utilisateur;
          this.sexe = this.utilisateur.sexe ? 1 : 0;
        } else {
          console.error('Utilisateur avec id', this.id, 'introuvable.');
        }
      });
    }
  }

  onSubmit() {
    this.utilisateur.id = this.id
    this.userService.modifierUtilisateur(this.utilisateur.id, this.utilisateur).subscribe(
      (data) => {
        console.log(data);
        alert('Utilisateur modifiée avec succès!');
        this.router.navigate(['afficher-utilisateur']);
      },
      (error) => {
        console.log(error);
        alert('Désolé, une erreur s\'est produite lors de la modification de l\'utilisateur.');
      }
    );
  }

}
