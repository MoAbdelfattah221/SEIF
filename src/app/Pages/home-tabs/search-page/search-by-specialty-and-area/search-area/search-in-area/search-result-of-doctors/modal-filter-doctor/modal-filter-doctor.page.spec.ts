import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalFilterDoctorPage } from './modal-filter-doctor.page';

describe('ModalFilterDoctorPage', () => {
  let component: ModalFilterDoctorPage;
  let fixture: ComponentFixture<ModalFilterDoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFilterDoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFilterDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
