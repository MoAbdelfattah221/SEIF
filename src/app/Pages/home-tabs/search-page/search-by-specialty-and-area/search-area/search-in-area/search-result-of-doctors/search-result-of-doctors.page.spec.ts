import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchResultOfDoctorsPage } from './search-result-of-doctors.page';

describe('SearchResultOfDoctorsPage', () => {
  let component: SearchResultOfDoctorsPage;
  let fixture: ComponentFixture<SearchResultOfDoctorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultOfDoctorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchResultOfDoctorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
