import { Component, Output,EventEmitter } from '@angular/core';
import { Note } from '../models/note';
import { NoteSarviceService } from '../sarvice/note-sarvice.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent{

  constructor(private noteService : NoteSarviceService) { }

  note: Note = {};

    @Output()
    noteAdded: EventEmitter<any> = new EventEmitter<any>();

  addNote() {
    this.noteService.saveNote(this.note).subscribe({
      next: data => {
          alert("Note added");
          this.noteAdded.emit(this.note);
       },
      error: error => {
         alert("Error while adding notes data !!");
        }
      });    
  }

}
