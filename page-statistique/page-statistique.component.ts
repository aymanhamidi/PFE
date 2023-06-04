import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { AjoutercnvabService } from '../ajoutercnvab.service';
import { Cnvab } from '../cnvab';
import * as Highcharts from 'highcharts';
import { AjouterdraglineService } from '../ajouterdragline.service';
import { Dragline } from '../dragline';
import { AjoutermoteurService } from '../ajoutermoteur.service';
import { Moteur } from '../moteur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-statistique',
  templateUrl: './page-statistique.component.html',
  styleUrls: ['./page-statistique.component.css']
})
export class PageStatistiqueComponent implements OnInit {
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
  lineChart1 = new Chart({
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
        name: 'Procesus Ajouter: Dragline',
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

  constructor(private ajoutercnvabService: AjoutercnvabService,private ajouterdraglineService: AjouterdraglineService,private ajoutermoteurService: AjoutermoteurService,private router: Router) {
    
      const a = localStorage.getItem('currentUser')
    if(a == "false") {
      // alert('Erreur : Connectez vous pour naviguer a cette page');
      this.router.navigate(['/deconnexionad']); 
    }
    this.currentUser = Number(a)
    console.log(this.currentUser)
    }

  ngOnInit(): void {
    this.ajoutercnvabService.getAllCnvab().subscribe(data => {
      const cnvabData = data.map((cnvab: Cnvab) => {
        const date = new Date(cnvab.date);
        if (date instanceof Date && !isNaN(date.getTime())) {
          const dateString = date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
          return [dateString, cnvab.temperature];
        } else {
          console.error('Invalid cnvab.date value:', cnvab.date);
          return null;
        }
      }).filter(data => data !== null);

      const cnvabData1 = data.map((cnvab: Cnvab) => {
        const date = new Date(cnvab.date);
        if (date instanceof Date && !isNaN(date.getTime())) {
          const dateString = date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
          return [dateString, cnvab.bruit];
        } else {
          console.error('Invalid cnvab.date value:', cnvab.date);
          return null;
        }
      }).filter(data => data !== null);

      const cnvabData2 = data.map((cnvab: Cnvab) => {
        const date = new Date(cnvab.date);
        if (date instanceof Date && !isNaN(date.getTime())) {
          const dateString = date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
          return [dateString, cnvab.vibration];
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
        yAxis: {
          title: {
            text: 'Valeur'
          }
        },
        series: [
          {
            name: 'Temperature',
            data: cnvabData
          } as any,
          {
            name: 'Bruit',
            data: cnvabData1
          } as any,
          {
            name: 'Vibration',
            data: cnvabData2
          } as any
        ]
      });
    });

    this.ajouterdraglineService.getAllDragline().subscribe(data => {
      const draglineData = data.map((dragline: Dragline) => {
        const date = new Date(dragline.date);
        if (date instanceof Date && !isNaN(date.getTime())) {
          const dateString = date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
          return [dateString, dragline.temperature];
        } else {
          console.error('Invalid dragline.date value:', dragline.date);
          return null;
        }
      }).filter(data => data !== null);

      const draglineData1 = data.map((dragline: Dragline) => {
        const date = new Date(dragline.date);
        if (date instanceof Date && !isNaN(date.getTime())) {
          const dateString = date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
          return [dateString, dragline.poids];
        } else {
          console.error('Invalid dragline.date value:', dragline.date);
          return null;
        }
      }).filter(data => data !== null);

      const draglineData2 = data.map((dragline: Dragline) => {
        const date = new Date(dragline.date);
        if (date instanceof Date && !isNaN(date.getTime())) {
          const dateString = date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
          return [dateString, dragline.rotation];
        } else {
          console.error('Invalid dragline.date value:', dragline.date);
          return null;
        }
      }).filter(data => data !== null);

      this.lineChart1 = new Chart({
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
            text: 'Nombre de Processus(Dragline) Ajouter'
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
            data: draglineData
          } as any,
          {
            name: 'Poids',
            data: draglineData1
          } as any,
          {
            name: 'Rotation',
            data: draglineData2
          } as any
        ]
      });
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
  }
  

}

 

  