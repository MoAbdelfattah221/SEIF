import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterFormPage } from './filter-form.page';

describe('FilterFormPage', () => {
  let component: FilterFormPage;
  let fixture: ComponentFixture<FilterFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
