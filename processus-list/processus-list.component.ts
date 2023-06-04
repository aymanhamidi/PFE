import { Component, OnInit } from '@angular/core';
import { Cnvab } from '../cnvab';
import { AjoutercnvabService } from '../ajoutercnvab.service';
import { Dragline } from '../dragline';
import { AjouterdraglineService } from '../ajouterdragline.service';
import { Moteur } from '../moteur';
import { AjoutermoteurService } from '../ajoutermoteur.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-processus-list',
  templateUrl: './processus-list.component.html',
  styleUrls: ['./processus-list.component.css']
})
export class ProcessusListComponent implements OnInit {

  cnvabList: Cnvab[] = [];
  draglineList: Dragline[] = [];
  moteurList: Moteur[] = [];
  filteredcnvabList: Cnvab[] = [];
  id: number = 0;
  currentUser: number = 0;

  constructor(
    private cnvabService: AjoutercnvabService,
    private draglineService: AjouterdraglineService,
    private moteurService: AjoutermoteurService,
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
    this.getAllCnvab1(this.currentUser);
    this.getAllDragline1(this.currentUser);
    this.getAllMoteur1(this.currentUser);
  }
  
  filterCnvabByUser(cnvabList: Cnvab[]): Cnvab[] {
    return cnvabList.filter(cnvab => cnvab.utilisateur === this.id);
  }
  filterDraglineByUser(draglinebList: Dragline[]): Dragline[] {
    return draglinebList.filter(dragline => dragline.utilisateur === this.id);
  }
  filterMoteurByUser(moteurbList: Moteur[]): Moteur[] {
    return moteurbList.filter(moteur => moteur.utilisateur === this.id);
  }


  getAllCnvab1(id: number) {
    this.cnvabService.getAllCnvab1(id).subscribe(data => {
      this.cnvabList = data;
    });
  }

  getAllDragline1(id: number) {
    this.draglineService.getAllDragline1(id).subscribe(data => {
      this.draglineList = data;
    });
  }

  getAllMoteur1(id: number) {
    this.moteurService.getAllMoteur1(id).subscribe(data => {
      this.moteurList = data;
    });
  }

  deleteCnvab(cnvab: Cnvab) {
    this.cnvabService.supprimerCnvab(cnvab.id).subscribe(() => {
      console.log('Cnvab supprimé avec succès');
      window.location.reload();
    }, (error) => {
      console.error('Erreur lors de la suppression du Cnvab', error);
      window.location.reload();
    });
  }

  editCnvab(cnvab: Cnvab) {
    this.cnvabService.modifierCnvab(cnvab.id, cnvab).subscribe(() => {
      console.log('Cnvab modifié avec succès');
      this.router.navigate(['modifier-cnvab/'+cnvab.id]);
    }, (error) => {
      console.error('Erreur lors de la modification du Cnvab', error);
    });
  }

  deleteDragline(dragline: Dragline) {
    this.draglineService.supprimerDragline(dragline.id).subscribe(() => {
      console.log('Dragline supprimé avec succès');
      window.location.reload();
    }, (error) => {
      console.error('Erreur lors de la suppression du Dragline', error);
      window.location.reload();
    });
  }

  editDragline(dragline: Dragline) {
    this.draglineService.modifierDragline(dragline.id, dragline).subscribe(() => {
      console.log('Dragline modifié avec succès');
      this.router.navigate(['modifier-dragline/'+dragline.id]);
    }, (error) => {
      console.error('Erreur lors de la modification du Dragline', error);
    });
  }

  deleteMoteur(moteur: Moteur) {
    this.moteurService.supprimerMoteur(moteur.id).subscribe(() => {
      console.log('Moteur supprimé avec succès');
      window.location.reload();
    }, (error) => {
      console.error('Erreur lors de la suppression du Moteur', error);
      window.location.reload();
    });
  }
  editMoteur(moteur: Moteur) {
    this.moteurService.modifierMoteur(moteur.id, moteur).subscribe(() => {
      console.log('Moteur modifié avec succès');
      this.router.navigate(['modifier-moteur/'+moteur.id]);
    }, (error) => {
      console.error('Erreur lors de la modification du Moteur', error);
    });
  }

 
}