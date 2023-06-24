import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from 'src/app/header/header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [MatIconModule, MatToolbarModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should contain material toolbar in header design', ()=>{
  //   expect(fixture.debugElement.query(By.css("mat-toolbar"))).toBeTruthy();
  // });

  it('should contain material icons for navigation links in header', ()=>{
    expect(fixture.debugElement.queryAll(By.css("mat-icon")).length).toBeGreaterThanOrEqual(2);
  });
});
