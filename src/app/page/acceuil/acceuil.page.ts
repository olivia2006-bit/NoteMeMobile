import {Component, inject, OnInit} from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonLabel,
  IonList,
  IonListHeader,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import {add, document, folder} from 'ionicons/icons';
import {addIcons} from 'ionicons';
import {NoteItemComponent} from "../../components/note-item/note-item.component";
import {NoteService} from "../../services/note.service";
import {ModalController} from "@ionic/angular";
import {NoteAddModalComponent} from "./screens/note-add-modal/note-add-modal.component";
import {NoteEditModalComponent} from "./screens/note-edit-modal/note-edit-modal.component";

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
    IonSearchbar,
    IonFab,
    IonFabButton,
    IonFabList,
    IonButton,
    IonIcon,
    IonButtons,
    IonList,
    IonListHeader,
    IonLabel,
    NoteItemComponent,

  ],
  providers: [ModalController]
})
export class AcceuilPage implements OnInit {

  noteService = inject(NoteService)
  modalController = inject(ModalController)

  constructor() {
    addIcons({document, add, folder})
  }

  ngOnInit() {
    this.noteService.loadNotes()
  }

  async openAddModal() {
    const modal = await this.modalController.create({
      component: NoteAddModalComponent
    });
    modal.present();
    const {data} = await modal.onWillDismiss();

  }

  async openEditModal(id: number) {
    const modal = await this.modalController.create({
      component: NoteEditModalComponent,
      componentProps: {id}
    });
    modal.present();
    const {data} = await modal.onWillDismiss();
  }
}
