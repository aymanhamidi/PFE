import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dragline } from '../dragline';
import { AjouterdraglineService } from '../ajouterdragline.service';

@Component({
  selector: 'app-modifier-dragline',
  templateUrl: './modifier-dragline.component.html',
  styleUrls: ['./modifier-dragline.component.css']
})
export class ModifierDraglineComponent implements OnInit {

  dragline: Dragline = new Dragline();
  id: number = 0;
  currentUser: number = 0;

  constructor(
    private draglineService: AjouterdraglineService,
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
      this.draglineService.getAllDragline().subscribe((data) => {
        const dragline = data.find((dragline) => dragline.id === +id);
        if (dragline) {
          this.dragline = dragline;
        } else {
          console.error('Dragline with id', id, 'not found.');
        }
      });
    }
  }

  onSubmit() {
    this.dragline.utilisateur = this.currentUser
    this.draglineService.modifierDragline(this.dragline.id, this.dragline).subscribe(
      (data) => {
        console.log(data);
        alert('Dragline modifiée avec succès!');
        this.router.navigate(['/processus-list/'+this.currentUser]); 
      },
      (error) => {
        console.log(error);
        alert('Désolé, une erreur s\'est produite lors de la modification de la CNVAB.');
      }
    );
  }
}
