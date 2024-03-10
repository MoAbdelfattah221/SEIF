import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorBookingPaymentConfirmPage } from './doctor-booking-payment-confirm.page';

describe('DoctorBookingPaymentConfirmPage', () => {
  let component: DoctorBookingPaymentConfirmPage;
  let fixture: ComponentFixture<DoctorBookingPaymentConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorBookingPaymentConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorBookingPaymentConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
