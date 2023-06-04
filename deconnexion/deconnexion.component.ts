import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent  implements OnInit{

  constructor(
    private router: Router
  ) {}
  ngOnInit() {
    {
      const a = localStorage.getItem('currentUser')
      localStorage.setItem('currentUser', "false")
      if (a == "false") {
        this.router.navigate(['/deconnexionad']); 
      }else{
      
      this.router.navigate(['/connexion-utilisateur']); 
    }
      
      }
    
      
    
  }
}
