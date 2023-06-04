import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cnvab } from '../cnvab';
import { AjoutercnvabService } from '../ajoutercnvab.service';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-modifier-cnvab',
  templateUrl: './modifier-cnvab.component.html',
  styleUrls: ['./modifier-cnvab.component.css']
})
export class ModifierCnvabComponent implements OnInit {
  
  cnvab: Cnvab = new Cnvab();
  id: number = 0;
  currentUser: number = 0;
 

  constructor(
    private cnvabService: AjoutercnvabService,
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
      this.cnvabService.getAllCnvab().subscribe((data) => {
        const cnvab = data.find((cnvab) => cnvab.id === +id);
        if (cnvab) {
          this.cnvab = cnvab;
        } else {
          console.error('Cnvab with id', id, 'not found.');
        }
      });
    }
  }

  onSubmit() {
    this.cnvab.utilisateur = this.currentUser
    this.cnvabService.modifierCnvab(this.cnvab.id, this.cnvab).subscribe(
      (data) => {
        console.log(data);
        alert('CNVAB modifiée avec succès!');
        this.router.navigate(['/processus-list/'+this.currentUser]); 
      },
      (error) => {
        console.log(error);
        alert('Désolé, une erreur s\'est produite lors de la modification de la CNVAB.');
      }
    );
  }
}



