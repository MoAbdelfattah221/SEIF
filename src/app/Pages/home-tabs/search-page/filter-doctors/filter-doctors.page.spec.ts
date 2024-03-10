import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterDoctorsPage } from './filter-doctors.page';

describe('FilterDoctorsPage', () => {
  let component: FilterDoctorsPage;
  let fixture: ComponentFixture<FilterDoctorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDoctorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterDoctorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
