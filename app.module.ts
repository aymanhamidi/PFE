import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionUtilisateurComponent } from './connexion-utilisateur/connexion-utilisateur.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConnexionAdministrateurComponent } from './connexion-administrateur/connexion-administrateur.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageAproposComponent } from './page-apropos/page-apropos.component';
import { ProcessusListComponent } from './processus-list/processus-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';
import { PageStatistiqueComponent } from './page-statistique/page-statistique.component';
import { ChartModule } from 'angular-highcharts';
import { ProcessusListuComponent } from './processus-listu/processus-listu.component';
import { AjouterCnvabComponent } from './ajouter-cnvab/ajouter-cnvab.component';
import { AjouterDraglineComponent } from './ajouter-dragline/ajouter-dragline.component';
import { AjouterMoteurComponent } from './ajouter-moteur/ajouter-moteur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ModifierCnvabComponent } from './modifier-cnvab/modifier-cnvab.component';
import { InfoUtilisateurComponent } from './info-utilisateur/info-utilisateur.component';
import { ModifierUtilisateurComponent } from './modifier-utilisateur/modifier-utilisateur.component';
import { AfficherUtilisateurComponent } from './afficher-utilisateur/afficher-utilisateur.component';
import { ModifierDraglineComponent } from './modifier-dragline/modifier-dragline.component';
import { ModifierMoteurComponent } from './modifier-moteur/modifier-moteur.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { DeconnexionadComponent } from './deconnexionad/deconnexionad.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModifierUtilisateuradComponent } from './modifier-utilisateurad/modifier-utilisateurad.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionUtilisateurComponent,
    ConnexionAdministrateurComponent,
    PageAccueilComponent,
    PageAproposComponent,
    ProcessusListComponent,
    AjouterUtilisateurComponent,
    PageStatistiqueComponent,
    ProcessusListuComponent,
    AjouterCnvabComponent,
    AjouterDraglineComponent,
    AjouterMoteurComponent,
    ModifierCnvabComponent,
    InfoUtilisateurComponent,
    ModifierUtilisateurComponent,
    AfficherUtilisateurComponent,
    ModifierDraglineComponent,
    ModifierMoteurComponent,
    DeconnexionComponent,
    DeconnexionadComponent,
    DashboardComponent,
    ModifierUtilisateuradComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    CardModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


