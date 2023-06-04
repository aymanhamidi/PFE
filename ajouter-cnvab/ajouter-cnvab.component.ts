import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cnvab } from '../cnvab';
import { AjoutercnvabService } from '../ajoutercnvab.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConnexionnutilisateurService } from '../connexionnutilisateur.service';
import { Userau } from '../userau';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-ajouter-cnvab',
  templateUrl: './ajouter-cnvab.component.html',
  styleUrls: ['./ajouter-cnvab.component.css']
})
export class AjouterCnvabComponent  {
  isLoggedIn: boolean = false;
  utilisateurForm = new FormGroup({
    idUtilisateur: new FormControl('', [Validators.required, Validators.email]),
    idMotdePasse: new FormControl('', [Validators.required]),
  });
  currentUser: number = 0
  
  
  cnvab: Cnvab = new Cnvab();
  id: number = 0;
  temperature: number = 0;
  bruit: number = 0;
  vibration: number = 0;
  ville: string = '';
  date: Date = new Date();
  inspectionVisuelle: string = '';
  utilisateur: number = 0;
  

  onSubmit() {
    this.cnvab.utilisateur = this.currentUser
    
    this.service.ajoutercnvab(this.cnvab).subscribe(
      sucess => {
        
        console.log(sucess);
        alert("Ajout réussie")

      },
      error => {
        console.log(error);
        alert("Désolé s'il vous plaît entrer des valeurs corrects")

      });
  }


  constructor(private service: AjoutercnvabService, private router: Router,private connexionnutilisateurservice: ConnexionnutilisateurService,
    private formBuilder: FormBuilder,private route: ActivatedRoute,) { 
      const a = localStorage.getItem('currentUser')
      if(a == "false") {
        // alert('Erreur : Connectez vous pour naviguer a cette page');
        this.router.navigate(['/deconnexion']); 
      }
      this.currentUser = Number(a)
      console.log(this.currentUser)
      }



  ajoutercnvab() {
      this.cnvab.temperature = this.temperature;
      this.cnvab.bruit = this.bruit;
      this.cnvab.vibration = this.vibration;
      this.cnvab.ville = this.ville;
      this.cnvab.date = this.date;
      this.cnvab.inspectionVisuelle = this.inspectionVisuelle;
      this.cnvab.utilisateur = this.currentUser;
   
    }
    filterCnvabByUser(cnvabList: Cnvab[]): Cnvab[] {
      return cnvabList.filter(cnvab => cnvab.utilisateur === this.currentUser);
    }

  supprimerCnvab(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cette CNVAB?')) {
      this.service.supprimerCnvab(id).subscribe(
        data => {
          console.log(data);
          alert('CNVAB supprimée avec succès!');
          this.ajoutercnvab();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  modifierCnvab(id: number) {
    this.router.navigate(['modifier-cnvab', { id: id }]);
  }

// connexionUtilisateur() {
//     if (this.utilisateurForm.valid) {
//       this.connexionnutilisateurservice.connexionnUserau(this.userau)
//         .subscribe(
//           (data: any) => {
//             this.isLoggedIn = true;
//             this.utilisateur.id = data.id; // mettre à jour l'ID de l'utilisateur
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
 
}
