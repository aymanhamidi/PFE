import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { AjoutercnvabService } from '../ajoutercnvab.service';
import { Cnvab } from '../cnvab';
import * as Highcharts from 'highcharts';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../utilisateur';
import { AjoutUserService } from '../ajout-user.service';
import { Dragline } from '../dragline';
import { AjouterdraglineService } from '../ajouterdragline.service';
import { AjoutermoteurService } from '../ajoutermoteur.service';
import { Moteur } from '../moteur';


interface XrangePointOptionsObject {
  x: number; // modifier le type de la clé `x` à `number`
  y: number;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  
  cnvabnbr: number = 0;
  draglinenbr: number = 0;
  utilisateurnbr: number = 0;
  draglineList: Dragline[] = [];
  utilisateurList: Utilisateur[] = [];
  currentUser: number = 0;
  
  
  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Procesus Ajouter: Convoyeur a bande',
        data: []
      } as any
    ]
  })

  lineChart2 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Procesus Ajouter: Moteur',
        data: []
      } as any
    ]
  })
  
  constructor(private ajoutercnvabService: AjoutercnvabService, private router: Router,private userService:AjoutUserService,
    private route: ActivatedRoute,private draglineService: AjouterdraglineService,private ajoutermoteurService: AjoutermoteurService,) {
     
        const a = localStorage.getItem('currentUser')
      if(a == "false") {
        // alert('Erreur : Connectez vous pour naviguer a cette page');
        this.router.navigate(['/deconnexionad']); 
      }
      this.currentUser = Number(a)
      console.log(this.currentUser)
      }

  ngOnInit(): void {
    
    this.getAllDragline();
    this.getAllUtilisateur1();
    this.getNombreUtilisateur();
    this.getNombreCnvab();
    this.getNombreDragline();
  }
  getAllDragline() {
    this.draglineService.getAllDragline().subscribe(data => {
      this.draglineList = data;
    });
  }
  getNombreUtilisateur() {
    this.userService.getNombreUtilisateur().subscribe(data => {
      this.utilisateurnbr = data;
    });
  }
  getNombreCnvab() {
    this.ajoutercnvabService.getNombreCnvab().subscribe(data => {
      this.cnvabnbr = data;
    });
  }
  getNombreDragline() {
    this.draglineService.getNombreDragline().subscribe(data => {
      this.draglinenbr = data;
    });
  }
  getAllUtilisateur1() {
    this.userService.getAllUtilisateur1().subscribe(data => {
      this.utilisateurList = data;
    });
    

    this.ajoutermoteurService.getAllMoteur().subscribe(data => {
      const moteurData = data.map((moteur: Moteur) => {
        const date = new Date(moteur.date);
        if (date instanceof Date && !isNaN(date.getTime())) {
          const dateString = date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
          return [dateString, moteur.temperature];
        } else {
          console.error('Invalid moteur.date value:', moteur.date);
          return null;
        }
      }).filter(data => data !== null);

      const moteurData1 = data.map((moteur: Moteur) => {
        const date = new Date(moteur.date);
        if (date instanceof Date && !isNaN(date.getTime())) {
          const dateString = date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
          return [dateString, moteur.vitesse];
        } else {
          console.error('Invalid moteur.date value:', moteur.date);
          return null;
        }
      }).filter(data => data !== null);

      const moteurData2 = data.map((moteur: Moteur) => {
        const date = new Date(moteur.date);
        if (date instanceof Date && !isNaN(date.getTime())) {
          const dateString = date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
          return [dateString, moteur.consommation];
        } else {
          console.error('Invalid moteur.date value:', moteur.date);
          return null;
        }
      }).filter(data => data !== null);

      this.lineChart2 = new Chart({
        chart: {
          type: 'line'
        },
        title: {
          text: ''
        },
        credits: {
          enabled: false
        },
        xAxis: {
          title: {
            text: 'Nombre de Processus(Moteur) Ajouter'
          }
        },
        yAxis: {
          title: {
            text: 'Valeur'
          }
        },
        series: [
          {
            name: 'Temperature',
            data: moteurData
          } as any,
          {
            name: 'Vitesse',
            data: moteurData1
          } as any,
          {
            name: 'Consommation',
            data: moteurData2
          } as any
        ]
      });
    });
  
    this.ajoutercnvabService.getAllCnvab().subscribe(data => {
      const cnvabData = data.map((cnvab: Cnvab) => {
        const date = new Date(cnvab.date);
        if (date instanceof Date && !isNaN(date.getTime())) {
          const dateString = date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
          return [  dateString,  cnvab.temperature ];
        } else {
          console.error('Invalid cnvab.date value:', cnvab.date);
          return null;
        }
      }).filter(data => data !== null);
  
      const cnvabData1 = data.map((cnvab: Cnvab) => {
        const date = new Date(cnvab.date);
        if (date instanceof Date && !isNaN(date.getTime())) {
          const dateString = date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
          return [  dateString,  cnvab.bruit ];
        } else {
          console.error('Invalid cnvab.date value:', cnvab.date);
          return null;
        }
      }).filter(data => data !== null);
  
      const cnvabData2 = data.map((cnvab: Cnvab) => {
        const date = new Date(cnvab.date);
        if (date instanceof Date && !isNaN(date.getTime())) {
          const dateString = date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
          return [  dateString,  cnvab.vibration ];
        } else {
          console.error('Invalid cnvab.date value:', cnvab.date);
          return null;
        }
      }).filter(data => data !== null);
  
      this.lineChart = new Chart({
        chart: {
          type: 'line'
        },
        title: {
          text: ''
        },
        credits: {
          enabled: false
        },
        xAxis: {
          title: {
            text: 'Nombre de Processus(Convoyeur a bande) Ajouter'
          }
        },
        yAxis: [{
            title: {
              text: 'Valeur'
            }
          }],
        series: [{
          name: 'Procesus Ajouter: Convoyeur a bande',
          data: cnvabData
        }as any, {
          name: 'Bruit',
          data: cnvabData1
        }as any, {
          name: 'Vibration',
          data: cnvabData2
        }as any,]
      });
    });
  }
  

}
  


  
   

 