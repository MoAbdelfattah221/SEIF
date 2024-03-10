import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationPickerForDoctorsPage } from './location-picker-for-doctors.page';

describe('LocationPickerForDoctorsPage', () => {
  let component: LocationPickerForDoctorsPage;
  let fixture: ComponentFixture<LocationPickerForDoctorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationPickerForDoctorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationPickerForDoctorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
