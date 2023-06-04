import { Component, OnInit } from '@angular/core';
import { Cnvab } from '../cnvab';
import { AjoutercnvabService } from '../ajoutercnvab.service';
import { Dragline } from '../dragline';
import { AjouterdraglineService } from '../ajouterdragline.service';
import { Moteur } from '../moteur';
import { AjoutermoteurService } from '../ajoutermoteur.service';
import { Router } from '@angular/router';
import { ProcessusuService } from '../processusu.service';


@Component({
  selector: 'app-processus-listu',
  templateUrl: './processus-listu.component.html',
  styleUrls: ['./processus-listu.component.css']
})
export class ProcessusListuComponent implements OnInit {
  
    cnvabList: Cnvab[] = [];
    draglineList: Dragline[] = [];
    moteurList: Moteur[] = [];
    currentUser: number = 0;
    
  
    constructor(
      private cnvabService: AjoutercnvabService,
      private draglineService: AjouterdraglineService,
      private moteurService: AjoutermoteurService,
  
      private router: Router
    ) { 
      const a = localStorage.getItem('currentUser')
    if(a == "false") {
      // alert('Erreur : Connectez vous pour naviguer a cette page');
      this.router.navigate(['/deconnexionad']); 
    }
    this.currentUser = Number(a)
    console.log(this.currentUser)
    }
  
    ngOnInit(): void {
      this.getAllCnvab();
      this.getAllDragline();
      this.getAllMoteur();
    }
      
    getAllCnvab() {
      this.cnvabService.getAllCnvab().subscribe(data => {
        this.cnvabList = data;
      });
    }
  
    getAllDragline() {
      this.draglineService.getAllDragline().subscribe(data => {
        this.draglineList = data;
      });
    }
  
    getAllMoteur() {
      this.moteurService.getAllMoteur().subscribe(data => {
        this.moteurList = data;
      });
    }
  
  
  
  }