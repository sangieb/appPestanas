import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardContent, IonAvatar, IonList, IonItem,
  IonLabel, IonChip, IonIcon, IonToggle
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { mailOutline, callOutline, locationOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardContent, IonAvatar, IonList, IonItem,
    IonLabel, IonChip, IonIcon, IonToggle
  ],
})
export class Tab3Page {
  nombre: string = 'Anyi Valentina Benites Gutierrez';
  carrera: string = 'Ingeniería de Software';
  correo: string = 'anyi.benites@universidad.edu.co';
  telefono: string = '300 000 0000';
  ciudad: string = 'Neiva-Huila';
  disponible: boolean = true;

  constructor() {
    addIcons({ mailOutline, callOutline, locationOutline });
  }

  cambiarEstado() {
    this.disponible = !this.disponible;
  }
}