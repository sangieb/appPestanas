import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton
} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton
  ],
})
export class Tab2Page {
  contador: number = 0;

  constructor() {}

  increase() {
    this.contador++;
  }

    decrease() {
    if (this.contador > 0) {
      this.contador--;
    }
  }
}