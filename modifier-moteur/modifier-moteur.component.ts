import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moteur } from '../moteur';
import { AjoutermoteurService } from '../ajoutermoteur.service';

@Component({
  selector: 'app-modifier-moteur',
  templateUrl: './modifier-moteur.component.html',
  styleUrls: ['./modifier-moteur.component.css']
})
export class ModifierMoteurComponent implements OnInit {

  moteur: Moteur = new Moteur();
  id: number = 0;
  currentUser: number = 0;

  constructor(
    private moteurService: AjoutermoteurService,
    private route: ActivatedRoute,
    private router: Router
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
    const id = this.route.snapshot.paramMap.get('id');
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.moteurService.getAllMoteur().subscribe((data) => {
        const moteur = data.find((moteur) => moteur.id === +id);
        if (moteur) {
          this.moteur = moteur;
        } else {
          console.error('Moteur with id', id, 'not found.');
        }
      });
    }
  }

  onSubmit() {
    this.moteur.utilisateur = this.currentUser
    this.moteurService.modifierMoteur(this.moteur.id, this.moteur).subscribe(
      (data) => {
        console.log(data);
        alert('Moteur modifiée avec succès!');
        this.router.navigate(['/processus-list/'+this.currentUser]); 
      },
      (error) => {
        console.log(error);
        alert('Désolé, une erreur s\'est produite lors de la modification de la Moteur.');
      }
    );
  }
}


