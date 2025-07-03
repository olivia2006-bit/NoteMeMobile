import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {NoteResponse} from "../models/note-response";
import {NoteRequest} from "../models/note-request";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  apiUrl = environment.apiUrl;
  private http = inject(HttpClient);

  notes: WritableSignal<NoteResponse[]> = signal([])

  constructor() {
  }

  loadNotes() {
    this.http.get<NoteResponse[]>(`${this.apiUrl}/note/all`).subscribe({
      next: notes => {
        this.notes.set(notes)
      },
      error: err => {
        this.notes.set([])
        console.log(err)
      }
    });
  }

  load(id: number) {
    return this.http.get<NoteResponse>(`${this.apiUrl}/note/findById/${id}`);
  }

  add(note: NoteRequest) {
    return this.http.post<NoteResponse>(`${this.apiUrl}/note/addnote`, note).pipe(
      tap(note => this.notes.update(value => [note, ...value])),
    )
  }

  edit(id: number, note: NoteRequest) {
    return this.http.post<NoteResponse>(`${this.apiUrl}/note/${id}/editnote`, note).pipe(
      tap(note => this.notes.update(value => value.map(n => n.id === note.id ? note : n))),
    )
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/note/${id}`).pipe(
      tap(note => this.notes.update(value => value.filter(n => n.id !== id))),
    )
  }

}
