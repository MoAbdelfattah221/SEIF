import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchBySpecialtyAndAreaPage } from './search-by-specialty-and-area.page';

describe('SearchBySpecialtyAndAreaPage', () => {
  let component: SearchBySpecialtyAndAreaPage;
  let fixture: ComponentFixture<SearchBySpecialtyAndAreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBySpecialtyAndAreaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBySpecialtyAndAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
