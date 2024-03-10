import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocateDoctorsGPSPage } from './locate-doctors-gps.page';

describe('LocateDoctorsGPSPage', () => {
  let component: LocateDoctorsGPSPage;
  let fixture: ComponentFixture<LocateDoctorsGPSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateDoctorsGPSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocateDoctorsGPSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
