import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonFab,
  IonFabButton,
  IonFabList,
  IonAlert,
} from '@ionic/angular/standalone';
import { document, add, folder, cloudUpload } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonSearchbar,
    IonFab,
    IonFabButton,
    IonFabList,
    IonButton,
    IonIcon,
    IonAlert,
  ],
})
export class AcceuilPage implements OnInit {
  constructor() {
    addIcons({ document, add, cloudUpload, folder });
  }

  ngOnInit() {}

  public alertButtons = ['Done', 'Cancel'];
  public alertInputs = [
    {
      placeholder: 'Note name',
    },
    {
      type: 'textarea',
      placeholder: 'The content of your note here',
    },
  ];
}
