import {Component, inject} from '@angular/core';
import {NoteFormPage} from "../../../../components/note-form/note-form.page";
import {IonContent} from "@ionic/angular/standalone";
import {NoteRequest} from "../../../../models/note-request";
import {NoteService} from "../../../../services/note.service";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-note-add-modal',
  templateUrl: './note-add-modal.component.html',
  styleUrls: ['./note-add-modal.component.scss'],
  imports: [
    NoteFormPage,
    IonContent
  ]
})
export class NoteAddModalComponent {

  noteService = inject(NoteService);
  modalController = inject(ModalController)

  note: NoteRequest = {
    title: "",
    content: "",
  }

  constructor() {
  }

  closeModal() {
    this.modalController.dismiss()
  }

  addNote(request: NoteRequest) {
    this.noteService.add(request).subscribe({
      next: note => {
        this.modalController.dismiss({note})
      },
      error: error => console.log(error),
    })
  }

}
