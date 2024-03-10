import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchAreaPage } from './search-area.page';

describe('SearchAreaPage', () => {
  let component: SearchAreaPage;
  let fixture: ComponentFixture<SearchAreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAreaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
