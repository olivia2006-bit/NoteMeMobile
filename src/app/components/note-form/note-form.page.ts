import {Component, computed, input, OnInit, output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {arrowBackOutline, trash} from "ionicons/icons";
import {NoteRequest} from "../../models/note-request";

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.page.html',
  styleUrls: ['./note-form.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonInput, IonItem, ReactiveFormsModule, IonTextarea, IonFooter, IonButton, IonButtons, IonIcon]
})
export class NoteFormPage implements OnInit {

  note = input.required<NoteRequest>()
  update = input.required<boolean>()
  title = computed(() => this.update() ? "Edit Note" : "Add Note")

  formCancelled = output();
  formSubmitted = output<NoteRequest>();

  form!: FormGroup<{ title: FormControl<string>, content: FormControl<string> }>;

  constructor() {
    addIcons({trash, arrowBackOutline})
  }

  ngOnInit() {
    this.form = new FormGroup<{ title: FormControl<string>, content: FormControl<string> }>({
      title: new FormControl(this.note().title, {nonNullable: true}),
      content: new FormControl(this.note().content, {nonNullable: true}),
    })
  }

  cancel() {
    this.formCancelled.emit()
  }

  submit() {
    if (this.form.valid) {
      this.formSubmitted.emit(this.form.getRawValue())
    }
  }

}
