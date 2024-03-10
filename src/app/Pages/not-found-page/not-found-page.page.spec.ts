import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotFoundPagePage } from './not-found-page.page';

describe('NotFoundPagePage', () => {
  let component: NotFoundPagePage;
  let fixture: ComponentFixture<NotFoundPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
