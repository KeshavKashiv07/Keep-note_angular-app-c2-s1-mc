import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteSarviceService {

  note_url :string ="http://localhost:3000/notes";

  constructor(private http : HttpClient) { }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.note_url);
  }

  saveNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.note_url, note);
  }  
}
