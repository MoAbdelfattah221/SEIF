import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtpSendPage } from './otp-send.page';

describe('OtpSendPage', () => {
  let component: OtpSendPage;
  let fixture: ComponentFixture<OtpSendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpSendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtpSendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
