import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deconnexionad',
  templateUrl: './deconnexionad.component.html',
  styleUrls: ['./deconnexionad.component.css']
})
export class DeconnexionadComponent implements OnInit{

  constructor(
    private router: Router
  ) {}
  ngOnInit() {
    const a = localStorage.getItem('currentUser')
    localStorage.setItem('currentUser', "false")
    if (a == "false") {
      this.router.navigate(['/deconnexionad']); 
    }else {
      this.router.navigate(['/connexion-administrateur']); 
    }
  }
}
