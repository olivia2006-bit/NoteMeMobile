import { Component, OnInit } from '@angular/core';
import {IonButton, IonIcon, IonItem, IonLabel} from "@ionic/angular/standalone";

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
  imports: [
    IonItem,
    IonLabel,
    IonButton,
    IonIcon
  ]
})
export class NoteItemComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
