import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonList, IonItem, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { clipboard, mail, people, person } from 'ionicons/icons';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonList, IonItem, IonButton]
})
export class AccountPage implements OnInit {

  constructor() {
    addIcons({ people,person, mail, clipboard });
   }

  ngOnInit() {
  }

}
