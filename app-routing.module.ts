import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionUtilisateurComponent } from './connexion-utilisateur/connexion-utilisateur.component';
import { ConnexionAdministrateurComponent } from './connexion-administrateur/connexion-administrateur.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component'
import { PageAproposComponent } from './page-apropos/page-apropos.component';
import { ProcessusListComponent } from './processus-list/processus-list.component';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';
import { PageStatistiqueComponent } from './page-statistique/page-statistique.component';
import { ProcessusListuComponent } from './processus-listu/processus-listu.component';
import { AjouterCnvabComponent } from './ajouter-cnvab/ajouter-cnvab.component';
import { AjouterDraglineComponent } from './ajouter-dragline/ajouter-dragline.component';
import { AjouterMoteurComponent } from './ajouter-moteur/ajouter-moteur.component';
import { ModifierCnvabComponent } from './modifier-cnvab/modifier-cnvab.component';
import { InfoUtilisateurComponent } from './info-utilisateur/info-utilisateur.component';
import { ModifierUtilisateurComponent } from './modifier-utilisateur/modifier-utilisateur.component';
import { AfficherUtilisateurComponent } from './afficher-utilisateur/afficher-utilisateur.component';
import { ModifierDraglineComponent } from './modifier-dragline/modifier-dragline.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { ModifierMoteurComponent } from './modifier-moteur/modifier-moteur.component';
import { DeconnexionadComponent } from './deconnexionad/deconnexionad.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModifierUtilisateuradComponent } from './modifier-utilisateurad/modifier-utilisateurad.component';



const routes: Routes = [
  { path: '', redirectTo: '/page-accueil', pathMatch: 'full' },
  { path: 'connexion-utilisateur', component: ConnexionUtilisateurComponent },
  { path: 'connexion-administrateur', component: ConnexionAdministrateurComponent },
  { path: 'page-accueil', component: PageAccueilComponent },
  { path: 'page-apropos', component: PageAproposComponent },
  { path: '', redirectTo: '/processus-listu', pathMatch: 'full' },
  { path: 'processus-listu', component: ProcessusListuComponent },
  { path: 'ajouter-utilisateur', component: AjouterUtilisateurComponent },
  { path: 'page-statistique', component: PageStatistiqueComponent },
  { path: '', redirectTo: 'processus-list/:currentUser', pathMatch: 'full' },
  { path: 'processus-list/:currentUser', component: ProcessusListComponent },
  { path: 'modifier-cnvab/:id', component: ModifierCnvabComponent},
  { path: 'ajouter-cnvab', component: AjouterCnvabComponent },
  { path: 'modifier-dragline/:id', component: ModifierDraglineComponent},
  { path: 'ajouter-dragline', component: AjouterDraglineComponent},
  { path: 'modifier-moteur/:id', component: ModifierMoteurComponent},
  { path: 'ajouter-moteur', component: AjouterMoteurComponent},
  { path: 'info-utilisateur/:currentUser', component: InfoUtilisateurComponent},
  { path: 'modifier-utilisateur/:id', component: ModifierUtilisateurComponent},
  { path: 'afficher-utilisateur', component: AfficherUtilisateurComponent},
  { path: 'deconnexion', component: DeconnexionComponent},
  { path: 'deconnexionad', component: DeconnexionadComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'modifier-utilisateurad/:id', component: ModifierUtilisateuradComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
