import {Component, input} from '@angular/core';
import {IonItem, IonLabel} from "@ionic/angular/standalone";

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
  imports: [
    IonItem,
    IonLabel
  ]
})
export class NoteItemComponent {

  id = input.required<number>()
  title = input.required<string>()
  content = input.required<string>()

  constructor() {
  }

}
