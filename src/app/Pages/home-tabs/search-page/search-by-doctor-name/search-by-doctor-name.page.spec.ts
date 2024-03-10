import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchByDoctorNamePage } from './search-by-doctor-name.page';

describe('SearchByDoctorNamePage', () => {
  let component: SearchByDoctorNamePage;
  let fixture: ComponentFixture<SearchByDoctorNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByDoctorNamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchByDoctorNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
