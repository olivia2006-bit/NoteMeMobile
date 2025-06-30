import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteEditPage } from './note-edit.page';

describe('NoteEditPage', () => {
  let component: NoteEditPage;
  let fixture: ComponentFixture<NoteEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
