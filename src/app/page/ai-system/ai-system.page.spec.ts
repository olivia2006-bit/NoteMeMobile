import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AiSystemPage } from './ai-system.page';

describe('AiSystemPage', () => {
  let component: AiSystemPage;
  let fixture: ComponentFixture<AiSystemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AiSystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
