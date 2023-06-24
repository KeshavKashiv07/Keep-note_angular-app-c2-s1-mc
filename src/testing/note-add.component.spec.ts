import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoteAddComponent } from 'src/app/note-add/note-add.component';

import { FormsModule } from '@angular/forms';
//import { NoteService } from 'src/app/services/note.service';
import { NoteServiceStub } from './noteServiceStub';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { NoteSarviceService } from 'src/app/sarvice/note-sarvice.service';


describe('NoteAddComponent', () => {
  let component: NoteAddComponent;
  let fixture: ComponentFixture<NoteAddComponent>;
  let noteService: NoteSarviceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      declarations: [NoteAddComponent],
      imports: [FormsModule, MatFormFieldModule, MatInputModule, NoopAnimationsModule],
      providers: [{ provide: NoteSarviceService, useClass: NoteServiceStub }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoteAddComponent);
    noteService = fixture.debugElement.injector.get(NoteSarviceService);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use material form-field components for note title and content inputs', () => {
    expect(fixture.debugElement.queryAll(By.css("mat-form-field")).length).toEqual(2);
  });

  it('should use material button component for submitting note details', () => {
    expect((fixture.debugElement.query(By.css("button")).nativeElement as HTMLElement)
      .getAttributeNames()
      .find(a => a.startsWith("mat")))
      .not.toBeUndefined();
  });
});
