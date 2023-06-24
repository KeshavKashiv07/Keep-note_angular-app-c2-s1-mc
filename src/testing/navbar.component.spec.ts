import { LayoutModule } from '@angular/cdk/layout';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

//import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { NoteViewComponent } from 'src/app/note-view/note-view.component';
//import { NoteService } from 'src/app/services/note.service';
import { NoteServiceStub } from './noteServiceStub';
import { SearchComponent } from 'src/app/search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NoteComponent } from 'src/app/note/note.component';
import { MatCardModule } from '@angular/material/card';
import { NoteSarviceService } from 'src/app/sarvice/note-sarvice.service';
import { NavigationComponent } from 'src/app/navigation/navigation.component';
import { NoteAddComponent } from 'src/app/note-add/note-add.component';

describe('NavbarComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationComponent, HeaderComponent, NoteViewComponent, SearchComponent, NoteComponent,NoteAddComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatCardModule
      ],
      providers: [{ provide: NoteSarviceService, useClass: NoteServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
