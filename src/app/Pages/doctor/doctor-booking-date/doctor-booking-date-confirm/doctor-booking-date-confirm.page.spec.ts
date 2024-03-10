import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorBookingDateConfirmPage } from './doctor-booking-date-confirm.page';

describe('DoctorBookingDateConfirmPage', () => {
  let component: DoctorBookingDateConfirmPage;
  let fixture: ComponentFixture<DoctorBookingDateConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorBookingDateConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorBookingDateConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
