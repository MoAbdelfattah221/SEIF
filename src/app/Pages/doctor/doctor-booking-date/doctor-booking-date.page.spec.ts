import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorBookingDatePage } from './doctor-booking-date.page';

describe('DoctorBookingDatePage', () => {
  let component: DoctorBookingDatePage;
  let fixture: ComponentFixture<DoctorBookingDatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorBookingDatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorBookingDatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
