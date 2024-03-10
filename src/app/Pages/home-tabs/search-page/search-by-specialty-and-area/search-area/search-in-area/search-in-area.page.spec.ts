import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchInAreaPage } from './search-in-area.page';

describe('SearchInAreaPage', () => {
  let component: SearchInAreaPage;
  let fixture: ComponentFixture<SearchInAreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInAreaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchInAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
