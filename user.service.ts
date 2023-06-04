import { Injectable } from '@angular/core';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser?: Utilisateur;

  constructor() { }
}