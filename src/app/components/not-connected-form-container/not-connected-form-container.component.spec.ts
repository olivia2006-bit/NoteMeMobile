import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotConnectedFormContainerComponent } from './not-connected-form-container.component';

describe('NotConnectedFormContainerComponent', () => {
  let component: NotConnectedFormContainerComponent;
  let fixture: ComponentFixture<NotConnectedFormContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotConnectedFormContainerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotConnectedFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
