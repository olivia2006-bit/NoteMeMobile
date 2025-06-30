import {Component, computed, input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  IonBackButton,
  IonButton, IonButtons,
  IonContent,
  IonFooter,
  IonHeader, IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {trash} from "ionicons/icons";

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.page.html',
  styleUrls: ['./note-edit.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonInput, IonItem, ReactiveFormsModule, IonTextarea, IonBackButton, IonFooter, IonButton, IonButtons, IonIcon]
})
export class NoteEditPage implements OnInit {

  idParam = input.required<string>()
  id = computed(() => Number(+this.idParam()))
  title = computed(() => this.id() === 0 ? "New note" : "Edit note");

  constructor() {
    addIcons({trash})
  }

  ngOnInit() {
  }

}
