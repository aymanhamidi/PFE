import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { AjoutUserService } from '../ajout-user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-afficher-utilisateur',
  templateUrl: './afficher-utilisateur.component.html',
  styleUrls: ['./afficher-utilisateur.component.css']
})
export class AfficherUtilisateurComponent  implements OnInit {

  utilisateur : Utilisateur = new Utilisateur();
  id: number = 0;
  currentUser: number = 0;
  utilisateurList: Utilisateur[] = [];
  

  constructor(
    private userService:AjoutUserService,
    private router: Router,
    private route: ActivatedRoute,
    ) { 
      const a = localStorage.getItem('currentUser')
      if(a != "admin1234@!") {
        // alert('Erreur : Connectez vous pour naviguer a cette page');
        localStorage.setItem('currentUser', "false")
        this.router.navigate(['/deconnexionad']); 
      }
    }
  
   
    onSelected(value:number): void {
      this.utilisateur.sexe = value==1 ? true : false;
    }
  ngOnInit(): void {
   this.getAllUtilisateur1();
   this.id = Number(this.route.snapshot.paramMap.get('id'));
   // this.currentUser = Number(localStorage.getItem('currentUser'));
   
   
  }

  getAllUtilisateur1() {
    this.userService.getAllUtilisateur1().subscribe(data => {
      this.utilisateurList = data;
    });
  }
  deleteUtilisateur(utilisateur: Utilisateur) {
    this.userService.supprimerUtilisateur(utilisateur.id).subscribe(() => {
      console.log('Utilisateur supprimé avec succès');
      window.location.reload();
    }, (error) => {
      console.error('Erreur lors de la suppression du Utilisateur', error);
      window.location.reload();
    });
  }
 
  editUtilisateur(utilisateur: Utilisateur) {
    this.router.navigate(['/modifier-utilisateurad/'+utilisateur.id]);
  }

}
