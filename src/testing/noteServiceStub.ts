import { of } from "rxjs";
import { Note } from "src/app/models/note";

export class NoteServiceStub {
    getAllNotes() {
        return of([{
            title: "Test Note",
            content: "Test note content for testing"
        }] as Note[]);
    }

    saveNote(note: Note) {
        return of(note);
    }
}