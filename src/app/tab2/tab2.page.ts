import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, remove } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon],
})
export class Tab2Page {
  contador: number = 0;

  constructor() {
    addIcons({ add, remove });
  }

  increase() {
    this.contador++;
  }

  decrease() {
    if (this.contador > 0) {
      this.contador--;
    }
  }
}