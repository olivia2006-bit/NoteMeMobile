import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon, IonLabel, IonList, IonListHeader,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import {add, document, folder} from 'ionicons/icons';
import {addIcons} from 'ionicons';
import {RouterLink} from "@angular/router";
import {NoteItemComponent} from "../../components/note-item/note-item.component";

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
    IonButtons,
    RouterLink,
    IonList,
    IonListHeader,
    IonLabel,
    NoteItemComponent,
  ],
})
export class AcceuilPage implements OnInit {
  constructor() {
    addIcons({document, add, folder});
  }

  ngOnInit() {
    console.log('Acceuil Page');
  }

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
