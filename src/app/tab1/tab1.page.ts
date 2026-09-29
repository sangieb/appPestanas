import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonList, IonItem, IonLabel, IonIcon
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { schoolOutline, businessOutline, calendarOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonList, IonItem, IonLabel, IonIcon
  ],
})
export class Tab1Page {
  nombre: string = 'Anyi Valentina Benites Gutierrez';
  carrera: string = 'Ingeniería de Software';
  universidad: string = 'Universidad Surcolombiana';
  semestre: string = '5 semestre';
  saludo: string = '';

  constructor() {
    addIcons({ schoolOutline, businessOutline, calendarOutline });

    const hora = new Date().getHours();
    if (hora < 12) {
      this.saludo = 'Buenos días';
    } else if (hora < 18) {
      this.saludo = 'Buenas tardes';
    } else {
      this.saludo = 'Buenas noches';
    }
  }
}