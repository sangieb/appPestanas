import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonAvatar, IonList, IonItem, IonLabel, IonChip, IonButton
} from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonAvatar, IonList, IonItem, IonLabel, IonChip, IonButton
  ],
})
export class Tab3Page {
  nombre: string = 'Angie Benites Gutierrez';
  carrera: string = 'Ingeniería de Software';
  correo: string = 'angie.benites@universidad.edu.co';
  telefono: string = '300 000 0000';
  ciudad: string = 'Neiva, Huila';
  disponible: boolean = true;

  constructor() {}

  cambiarEstado() {
  this.disponible = !this.disponible;
}
}