import {Component, inject, Input, OnInit} from '@angular/core';
import {IonContent} from "@ionic/angular/standalone";
import {NoteFormPage} from "../../../../components/note-form/note-form.page";
import {NoteRequest} from "../../../../models/note-request";
import {NoteService} from "../../../../services/note.service";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-note-edit-modal',
  templateUrl: './note-edit-modal.component.html',
  styleUrls: ['./note-edit-modal.component.scss'],
  imports: [
    IonContent,
    NoteFormPage
  ]
})
export class NoteEditModalComponent implements OnInit {

  noteService = inject(NoteService)
  modalController = inject(ModalController)

  @Input() id!: number;

  note?: NoteRequest

  constructor() {
  }

  ngOnInit() {
    this.noteService.load(this.id).subscribe({
      next: note => {
        this.note = note;
      },
      error: err => {
        console.log(err)
      }
    })
  }

  closeModal() {
    this.modalController.dismiss()
  }

  editNote(request: NoteRequest) {
    this.noteService.edit(this.id, request).subscribe({
      next: note => {
        this.modalController.dismiss({note})
      },
      error: error => console.log(error),
    })
  }

}
